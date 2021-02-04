/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { Rights } from './rights';
import { ScriptUtil } from './scriptutil';
import { EditUtil } from './entity';

/**
 * Options for layout item type 'tab'
 */
export interface TabItemOptions {
  /**
   * Display text in tab panel
   */
  caption: string;
}

/**
 * Options for layout item type 'crudcontainer'
 */
export interface CrudContainerOptions {
  /**
   * Identifier of business object
   */
  entity: string;

  /**
   * Identifier of list query
   */
  query?: string;
}

/**
 * Options for layout item type 'grid'
 */
export interface EntityGridOptions extends CrudContainerOptions {
  /**
   * Optional fixed height of component
   */
  height?: string;

  /**
   * Identifier of list layout
   */
  layout?: string;
}

/**
 * Options for layout item type 'map'
 */
export interface EntityMapOptions extends CrudContainerOptions {
  /**
   * Optional fixed height of component
   */
  height?: string;

  /**
   * Identifier of edit layout for crud operations
   */
  editLayout?: string;

  /**
   * Business object property containing coordinates
   */
  locationMember: string;

  /**
   * Business object property containing display text
   */
  displayMember: string;
}

/**
 * Options for layout item type 'statistic'
 */
export interface StatisticOptions {
  /**
   * Identifier of statistic definition
   */
  statistic: string;
}

/**
 * Basic options for layout item element
 */
export interface PageLayoutItemOptions {
  /**
   * Optional fixed height of component
   */
  height?: string;

  /**
   * Optional fixed width of component
   */
  width?: string;

  /**
   * Item type specific options
   */
  itemoptions?:
    | TabItemOptions
    | CrudContainerOptions
    | EntityGridOptions
    | EntityMapOptions
    | StatisticOptions;
}

/**
 * Layout item tree element
 */
export interface PageLayoutItem {
  /**
   * Type identifier for layout item
   */
  type:
    | 'tabs'
    | 'tabitem'
    | 'entitygrid'
    | 'statistic'
    | 'crudcontainer'
    | 'grid'
    | 'map';

  /**
   * Options for layout item
   */
  options?: PageLayoutItemOptions;

  /**
   * Number of cols for layouting child editor items (only for container types)
   */
  colCount?: number;

  /**
   * Number of cols occupied by editor in layout
   */
  colSpan?: number;

  /**
   * Child layout components (only for container types)
   */

  items?: Array<PageLayoutItem>;
}

/**
 * Toolbar element
 */
export interface PageToolbarItem {
  /**
   * Type identifier of toolbar component
   */
  type: string;

  /**
   * Unique name of toolbar element
   */
  name: string;

  /**
   * Display text
   */
  caption?: string;

  /**
   * Identifier for lookup (only for components with select lists)
   */
  lookup?: string;

  /**
   * Optional fixed width of toolbar component
   */
  width?: string;

  /**
   * Initial value of toolbar component
   */
  defaultValue: unknown | Array<unknown>;

  /**
   * Component type specific options
   */
  options: Record<string, unknown>;
}

/**
 * Page layout metadata
 */
export interface PageLayout {
  /**
   * Header bar text
   */
  title?: string;

  /**
   * Entity identifier for documentation
   */
  documentationEntity?: string;

  /**
   * Collection of toolbar items
   */
  toolbaritems?: Array<PageToolbarItem>;

  /**
   * Collection of layout items
   */
  items: Array<PageLayoutItem>;
}

/**
 * Adaptor for initiating actions from custom page scripts
 */
export interface ScriptActions {
  /**
   * Set head params for page layout items
   *
   * @param params New page head param object
   */
  loadData: (params: Record<string, unknown>) => void;
}

/**
 * Definition of page specific custom scripts
 */
export interface CompiledPageCustomScripts {
  /**
   * Check if user is allowed to view page in navigation
   *
   * @param rights User rights container
   * @param page Identifier of page
   * @returns true if page is allowed, false if not
   */
  pageVisible?: (rights: Rights, page: string) => boolean;

  /**
   * Check if user is allowed to navigate to page
   *
   * @param rights User rights container
   * @param page Identifier of page
   * @returns true if page is allowed, false if not
   */
  pageEnabled?: (rights: Rights, page: string) => boolean;

  /**
   * Prepare custom param object containing values needed for other custom scripts
   *
   * @param lookups Lookup definitions prepared for page
   * @param util Utility for performing misc operations
   * @param callback Async callback operation performed by custom script when custom param preparation is finished
   */
  prepareCustomParam?: (
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    callback: (customParam: Record<string, unknown>) => void
  ) => void;

  /**
   * Toolbar initialization finished
   *
   * @param hidden Set if toolbar is not displayed on small screens
   * @param lookups Lookup definitions prepared for page
   * @param util Utility for performing misc operations
   * @param actions Container containing action triggers for page
   */
  paramsInitialized?: (
    hidden: boolean,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions
  ) => void;

  /**
   * Single toolbar component initialized
   *
   * @param name Unique name of toolbar item
   * @param editUtil Adapter for accessing editor components by data member
   * @param lookups Lookup definitions prepared for page
   * @param util Utility for performing misc operations
   * @param actions Container containing action triggers for page
   */
  paramEditorInitialized?: (
    name: string,
    editUtil: EditUtil,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions
  ) => void;

  /**
   * toolbar component value changed
   *
   * @param name Unique name of toolbar item
   * @param value Current value of toolbar item
   * @param editUtil Adapter for accessing editor components by data member
   * @param lookups Lookup definitions prepared for page
   * @param util Utility for performing misc operations
   * @param actions Container containing action triggers for page
   */
  paramEditorValueChanged?: (
    name: string,
    value: unknown | Array<unknown>,
    editUtil: EditUtil,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions
  ) => void;

  /**
   * Toolbar component event triggered
   *
   * @param name Unique name of toolbar item
   * @param event Event identifier
   * @param editUtil Adapter for accessing editor components by data member
   * @param lookups Lookup definitions prepared for page
   * @param util Utility for performing misc operations
   * @param actions Container containing action triggers for page
   * @param param Additional parameter to item event
   */
  paramEditorEvent?: (
    name: string,
    event: string,
    editUtil: EditUtil,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions,
    param?: Record<string, unknown>
  ) => void;
}

/**
 * Page metadata
 */
export interface CompiledPageData {
  /**
   * Unique identifier of page
   */
  identifier: string;

  /**
   * Display name for navigation
   */
  name: string;

  /**
   * Layout definition
   */
  layout: PageLayout;

  /**
   * Collection of lookup definitions
   */
  lookups: Array<{
    identifier: string;
    id: string;
    valueMember: string;
    displayMember: string;
    type: number;
    hasParam: boolean;
  }>;

  /**
   * Collection of picklist definitions
   */
  picklists: Array<{ identifier: string; entity: string; field: string }>;

  /**
   * Container for custom script operations
   */
  compiledCustomScripts?: CompiledPageCustomScripts;
}

/**
 * Interface for page metadata operations
 */
export interface MetaPageApi {
  /**
   * Fetch page metadata by identifier
   *
   * @param token Access token required for authentication
   * @param page Identifier for page
   * @returns Promise containing page metadata
   */
  pageDataForIdentifier: (
    token: string,
    page: string
  ) => Promise<CompiledPageData>;
}
