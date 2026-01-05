import { BaseStatus } from '../sms_templates/BaseStatus.model';
import { LibPublishStatus } from '../library_books/LibPublishStatus.model';
import { LanguageCode } from '../library_books/LanguageCode.model';

export interface LibCategoryCreate {
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
   * 发布状态：draft=草稿, pending=待审核, published=已发布, archived=已归档
   */
  category_status?: LibPublishStatus | null;
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