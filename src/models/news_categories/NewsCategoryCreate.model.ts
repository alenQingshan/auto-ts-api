import { BaseStatus } from '../sms_templates/BaseStatus.model';
import { LanguageCode } from '../library_books/LanguageCode.model';
import { NewsPublishStatus } from '../news_articles/NewsPublishStatus.model';

export interface NewsCategoryCreate {
  /**
   * 类目编码
   */
  code?: any | null;
  /**
   * 分类名称
   */
  name: string | null;
  /**
   * 分类描述
   */
  description?: any | null;
  /**
   * 父分类ID
   */
  parent_id?: any | null;
  /**
   * 状态: active/inactive
   */
  status?: BaseStatus | null;
  /**
   * 语言代码
   */
  language_code?: LanguageCode | null;
  /**
   * 发布状态
   */
  category_status?: NewsPublishStatus | null;
  /**
   * 排序序号
   */
  sort_order?: any | null;
  /**
   * 类别图标路径/URL
   */
  icon?: any | null;
  /**
   * 分类图片/封面
   */
  image_url?: any | null;
  /**
   * APP显示
   */
  show_in_app?: any | null;
  /**
   * Web显示
   */
  show_in_web?: any | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
  /**
   * 默认语言代码
   */
  lang?: LanguageCode | null;
}