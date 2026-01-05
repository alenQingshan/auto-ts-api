import { Gender } from '../common/Gender.model';
import { NewsAuthorInoutType } from '../news_articles/NewsAuthorInoutType.model';
import { NewsAuthorPayMethod } from '../news_articles/NewsAuthorPayMethod.model';
import { AuthorStatus } from '../common/AuthorStatus.model';

export interface NewsAuthorCreate {
  /**
   * 姓名（中文）
   */
  name_zh: string | null;
  /**
   * 代号/客户码（租户内唯一）
   */
  code: string | null;
  /**
   * 英文姓名
   */
  name_en?: any | null;
  /**
   * 笔名
   */
  pen_name?: any | null;
  /**
   * 身份证/证件号
   */
  id_card_no?: any | null;
  /**
   * 生日
   */
  birthday?: any | null;
  /**
   * 性别
   */
  gender?: Gender | null;
  /**
   * 作者等级
   */
  author_level?: any | null;
  /**
   * inout_type
   */
  inout_type?: NewsAuthorInoutType | null;
  /**
   * 组别
   */
  group_name?: any | null;
  /**
   * pay_method
   */
  pay_method?: NewsAuthorPayMethod | null;
  /**
   * 户籍邮编
   */
  reg_zipcode?: any | null;
  /**
   * 户籍城市
   */
  reg_city?: any | null;
  /**
   * 户籍地址
   */
  reg_address?: any | null;
  /**
   * 通讯邮编
   */
  mail_zipcode?: any | null;
  /**
   * 通讯城市
   */
  mail_city?: any | null;
  /**
   * 通讯地址
   */
  mail_address?: any | null;
  /**
   * 国外地址
   */
  foreign_address?: any | null;
  /**
   * 家庭电话
   */
  phone_home?: any | null;
  /**
   * 办公电话
   */
  phone_office?: any | null;
  /**
   * 行动电话
   */
  phone_mobile?: any | null;
  /**
   * 传真
   */
  fax_number?: any | null;
  /**
   * Email
   */
  email?: any | null;
  /**
   * 备注
   */
  remark?: any | null;
  /**
   * 作业人员
   */
  operator_name?: any | null;
  /**
   * 银行名称
   */
  bank_name?: any | null;
  /**
   * 银行分行
   */
  bank_branch?: any | null;
  /**
   * 分行代号
   */
  bank_branch_code?: any | null;
  /**
   * 银行账号
   */
  bank_account_no?: any | null;
  /**
   * 银行户名
   */
  bank_account_name?: any | null;
  /**
   * 外币户名
   */
  fc_account_name?: any | null;
  /**
   * 外币收款人地址
   */
  fc_beneficiary_address?: any | null;
  /**
   * 外币银行及分行名称
   */
  fc_bank_branch_name?: any | null;
  /**
   * 外币银行地址
   */
  fc_bank_address?: any | null;
  /**
   * 外币收款银行编制代码(SWIFT/BIC)
   */
  fc_bank_swift_code?: any | null;
  /**
   * 外币汇款账号
   */
  fc_bank_account_no?: any | null;
  /**
   * 稿费_每字
   */
  fee_per_char?: any | null;
  /**
   * 稿费_每篇
   */
  fee_per_article?: any | null;
  /**
   * 状态
   */
  status?: AuthorStatus | null;
  /**
   * 租户ID
   */
  tenant_id: number | null;
}