import { BaseService, ExtOptions } from './base.service';
import { AutomationRuleCreate } from '../models/automation/AutomationRuleCreate.model';
import { AutomationRuleUpdate } from '../models/automation/AutomationRuleUpdate.model';
import { ResponseSchema } from '../models/auth/ResponseSchema.model';
import { AutomationRuleStatusUpdate } from '../models/automation/AutomationRuleStatusUpdate.model';
import { AutomationConditionCreate } from '../models/automation/AutomationConditionCreate.model';
import { AutomationActionCreate } from '../models/automation/AutomationActionCreate.model';
import { RuleFullCreat } from '../models/automation/RuleFullCreat.model';
import { AutomationLogCreate } from '../models/automation/AutomationLogCreate.model';

class AutomationService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Create Rule
   * @param data AutomationRuleCreate
   */
  createRule(data: AutomationRuleCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * List Rules
   * @param data any
   */
  listRules(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Rule
   * @param rule_id string | number
   * @param data any
   */
  getRule(rule_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/${rule_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Update Rule
   * @param rule_id string | number
   * @param data AutomationRuleUpdate
   */
  updateRule(rule_id: string | number, data: AutomationRuleUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/${rule_id}`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Delete Rule
   * @param rule_id string | number
   * @param data any
   */
  deleteRule(rule_id: string | number, data: any, extOptions?: ExtOptions): Promise<ResponseSchema> {
    const url = `/api/v1/automation/rules/${rule_id}`;
    return this.request<ResponseSchema>('delete', url, data, extOptions);
  }

  /**
   * Update Rule Status
   * @param rule_id string | number
   * @param data AutomationRuleStatusUpdate
   */
  updateRuleStatus(rule_id: string | number, data: AutomationRuleStatusUpdate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/${rule_id}/status`;
    return this.request<any>('patch', url, data, extOptions);
  }

  /**
   * Get Rules By Tenant
   * @param tenant_id string | number
   * @param data any
   */
  getRulesByTenant(tenant_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/tenant/${tenant_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Condition
   * @param rule_id string | number
   * @param data AutomationConditionCreate
   */
  createCondition(rule_id: string | number, data: AutomationConditionCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/${rule_id}/conditions`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * List Conditions
   * @param rule_id string | number
   * @param data any
   */
  listConditions(rule_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/${rule_id}/conditions`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Create Action
   * @param rule_id string | number
   * @param data AutomationActionCreate
   */
  createAction(rule_id: string | number, data: AutomationActionCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/${rule_id}/actions`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * List Actions
   * @param rule_id string | number
   * @param data any
   */
  listActions(rule_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/${rule_id}/actions`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * 创建自动化规则(完整模式)
   * @param data RuleFullCreat
   */
  createRuleFull(data: RuleFullCreat, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/full`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * 获取自动化规则详情(完整模式)
   * @param rule_id string | number
   * @param data any
   */
  getRuleFull(rule_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/${rule_id}/full`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * 更新自动化规则(完整模式)
   * @param rule_id string | number
   * @param data RuleFullCreat
   */
  updateRuleFull(rule_id: string | number, data: RuleFullCreat, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/rules/${rule_id}/full`;
    return this.request<any>('put', url, data, extOptions);
  }

  /**
   * Create Log
   * @param data AutomationLogCreate
   */
  createLog(data: AutomationLogCreate, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/logs`;
    return this.request<any>('post', url, data, extOptions);
  }

  /**
   * List Logs
   * @param data any
   */
  listLogs(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/logs`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Log
   * @param log_id string | number
   * @param data any
   */
  getLog(log_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/logs/${log_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Logs By Tenant
   * @param tenant_id string | number
   * @param data any
   */
  getLogsByTenant(tenant_id: string | number, data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/logs/tenant/${tenant_id}`;
    return this.request<any>('get', url, data, extOptions);
  }

  /**
   * Get Automation Configurations
   * @param data any
   */
  getAutomationConfigurations(data: any, extOptions?: ExtOptions): Promise<any> {
    const url = `/api/v1/automation/configurations`;
    return this.request<any>('get', url, data, extOptions);
  }

}

export default new AutomationService();