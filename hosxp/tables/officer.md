# `officer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_id | int(11) | NO | PRI | 0 |  |  |
| officer_name | varchar(100) | YES | MUL | NULL |  |  |
| officer_group_list_text | varchar(200) | YES |  | NULL |  |  |
| officer_login_name | varchar(100) | YES | MUL | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| officer_login_password_md5 | varchar(200) | YES |  | NULL |  |  |
| officer_login_password | varchar(250) | YES |  | NULL |  |  |
| officer_pname | varchar(50) | YES |  | NULL |  |  |
| officer_fname | varchar(100) | YES |  | NULL |  |  |
| officer_lname | varchar(100) | YES |  | NULL |  |  |
| officer_doctor_code | varchar(10) | YES | MUL | NULL |  |  |
| officer_phone | varchar(100) | YES |  | NULL |  |  |
| officer_mobile | varchar(100) | YES |  | NULL |  |  |
| officer_email | varchar(100) | YES |  | NULL |  |  |
| auto_lockout | char(1) | YES |  | NULL |  |  |
| auto_lockout_minute | int(11) | YES |  | NULL |  |  |
| officer_line_id | varchar(100) | YES |  | NULL |  |  |
| allow_med_template_transfer | char(1) | YES |  | NULL |  |  |
| allow_oper_template_transfer | char(1) | YES |  | NULL |  |  |
| officer_fax | varchar(100) | YES |  | NULL |  |  |
| no_show_welcome | char(1) | YES |  | NULL |  |  |
| officer_active | char(1) | YES |  | NULL |  |  |
| last_change_password_date | date | YES |  | NULL |  |  |
| officer_authentication_type_id | int(11) | YES |  | NULL |  |  |
| send_login_notice | char(1) | YES |  | NULL |  |  |
| line_token | varchar(200) | YES |  | NULL |  |  |
| ipd_order_type | varchar(3) | YES |  | NULL |  |  |
| officer_cid | varchar(13) | YES | MUL | NULL |  |  |
| send_moph_otp | char(1) | YES |  | NULL |  |  |
| officer_cid_hash256 | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | officer_doctor_code | no | 1 |
| ix_officer_cid | officer_cid | no | 1 |
| ix_officer_login_name | officer_login_name | no | 1 |
| ix_officer_name | officer_name | no | 1 |
| PRIMARY | officer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "officer_id": 1,
    "officer_name": "[MASKED_FULLNAME]",
    "officer_group_list_text": null,
    "officer_login_name": "bmscloud",
    "emp_id": null,
    "officer_login_password_md5": "E10ADC3949BA59ABBE56E057F20F883E",
    "officer_login_password": "D69CD2B455FE24ED056B8836D49AD477D8B43898B4D641E60FED583BBD25A24E53C113EB92D5",
    "officer_pname": null,
    "officer_fname": null,
    "officer_lname": null,
    "officer_doctor_code": "352",
    "officer_phone": null,
    "officer_mobile": null,
    "officer_email": null,
    "auto_lockout": null,
    "auto_lockout_minute": null,
    "officer_line_id": null,
    "allow_med_template_transfer": null,
    "allow_oper_template_transfer": null,
    "officer_fax": null,
    "no_show_welcome": null,
    "officer_active": "Y",
    "last_change_password_date": null,
    "officer_authentication_type_id": 1,
    "send_login_notice": null,
    "line_token": null,
    "ipd_order_type": null,
    "officer_cid": null,
    "send_moph_otp": null,
    "officer_cid_hash256": null
  },
  {
    "officer_id": 2,
    "officer_name": "[MASKED_FULLNAME]",
    "officer_group_list_text": null,
    "officer_login_name": "pdpa",
    "emp_id": 4,
    "officer_login_password_md5": "39F13D60B3F6FBE0BA1636B0A9283C50",
    "officer_login_password": "D69CD2B455FE24ED056B8836D49AD477D8B43898B4D641E60FED583BBD25A24E2D18AF8B25333AF5",
    "officer_pname": null,
    "officer_fname": null,
    "officer_lname": null,
    "officer_doctor_code": null,
    "officer_phone": null,
    "officer_mobile": null,
    "officer_email": null,
    "auto_lockout": null,
    "auto_lockout_minute": null,
    "officer_line_id": null,
    "allow_med_template_transfer": null,
    "allow_oper_template_transfer": null,
    "officer_fax": null,
    "no_show_welcome": null,
    "officer_active": "Y",
    "last_change_password_date": null,
    "officer_authentication_type_id": 1,
    "send_login_notice": null,
    "line_token": null,
    "ipd_order_type": null,
    "officer_cid": null,
    "send_moph_otp": null,
    "officer_cid_hash256": null
  },
  {
    "officer_id": 3,
    "officer_name": "[MASKED_FULLNAME]",
    "officer_group_list_text": null,
    "officer_login_name": "chatchawal",
    "emp_id": null,
    "officer_login_password_md5": "39f13d60b3f6fbe0ba1636b0a9283c50",
    "officer_login_password": "",
    "officer_pname": null,
    "officer_fname": null,
    "officer_lname": null,
    "officer_doctor_code": "187",
    "officer_phone": null,
    "officer_mobile": null,
    "officer_email": null,
    "auto_lockout": null,
    "auto_lockout_minute": null,
    "officer_line_id": null,
    "allow_med_template_transfer": null,
    "allow_oper_template_transfer": null,
    "officer_fax": null,
    "no_show_welcome": null,
    "officer_active": "Y",
    "last_change_password_date": null,
    "officer_authentication_type_id": null,
    "send_login_notice": null,
    "line_token": null,
    "ipd_order_type": null,
    "officer_cid": "",
    "send_moph_otp": null,
    "officer_cid_hash256": ""
  },
  {
    "officer_id": 4,
    "officer_name": "[MASKED_FULLNAME]",
    "officer_group_list_text": null,
    "officer_login_name": "yuwa263",
    "emp_id": null,
    "officer_login_password_md5": "81dc9bdb52d04dc20036dbd8313ed055",
    "officer_login_password": null,
    "officer_pname": null,
    "officer_fname": null,
    "officer_lname": null,
    "officer_doctor_code": "324",
    "officer_phone": null,
    "officer_mobile": null,
    "officer_email": null,
    "auto_lockout": null,
    "auto_lockout_minute": null,
    "officer_line_id": null,
    "allow_med_template_transfer": null,
    "allow_oper_template_transfer": null,
    "officer_fax": null,
    "no_show_welcome": null,
    "officer_active": "Y",
    "last_change_password_date": null,
    "officer_authentication_type_id": null,
    "send_login_notice": null,
    "line_token": null,
    "ipd_order_type": null,
    "officer_cid": "",
    "send_moph_otp": null,
    "officer_cid_hash256": null
  },
  {
    "officer_id": 5,
    "officer_name": "[MASKED_FULLNAME]",
    "officer_group_list_text": null,
    "officer_login_name": "yuwa210",
    "emp_id": null,
    "officer_login_password_md5": "ba3e9b6a519cfddc560b5d53210df1bd",
    "officer_login_password": null,
    "officer_pname": null,
    "officer_fname": null,
    "officer_lname": null,
    "officer_doctor_code": "267",
    "officer_phone": null,
    "officer_mobile": null,
    "officer_email": null,
    "auto_lockout": null,
    "auto_lockout_minute": null,
    "officer_line_id": null,
    "allow_med_template_transfer": null,
    "allow_oper_template_transfer": null,
    "officer_fax": null,
    "no_show_welcome": null,
    "officer_active": "Y",
    "last_change_password_date": null,
    "officer_authentication_type_id": null,
    "send_login_notice": null,
    "line_token": null,
    "ipd_order_type": null,
    "officer_cid": "",
    "send_moph_otp": null,
    "officer_cid_hash256": null
  },
  {
    "officer_id": 6,
    "officer_name": "[MASKED_FULLNAME]",
    "officer_group_list_text": null,
    "officer_login_name": "yuwa254",
    "emp_id": null,
    "officer_login_password_md5": "81dc9bdb52d04dc20036dbd8313ed055",
    "officer_login_password": null,
    "officer_pname": null,
    "officer_fname": null,
    "officer_lname": null,
    "officer_doctor_code": "315",
    "officer_phone": null,
    "officer_mobile": null,
    "officer_email": null,
    "auto_lockout": null,
    "auto_lockout_minute": null,
    "officer_line_id": null,
    "allow_med_template_transfer": null,
    "allow_oper_template_transfer": null,
    "officer_fax": null,
    "no_show_welcome": null,
    "officer_active": "Y",
    "last_change_password_date": null,
    "officer_authentication_type_id": null,
    "send_login_notice": null,
    "line_token": null,
    "ipd_order_type": null,
    "officer_cid": "",
    "send_moph_otp": null,
    "officer_cid_hash256": null
  },
  {
    "officer_id": 7,
    "officer_name": "[MASKED_FULLNAME]",
    "officer_group_list_text": null,
    "officer_login_name": "yuwa264",
    "emp_id": null,
    "officer_login_password_md5": "96055f5b06bf9381ac43879351642cf5",
    "officer_login_password": null,
    "officer_pname": null,
    "officer_fname": null,
    "officer_lname": null,
    "officer_doctor_code": "325",
    "officer_phone": null,
    "officer_mobile": null,
    "officer_email": null,
    "auto_lockout": null,
    "auto_lockout_minute": null,
    "officer_line_id": null,
    "allow_med_template_transfer": null,
    "allow_oper_template_transfer": null,
    "officer_fax": null,
    "no_show_welcome": null,
    "officer_active": "Y",
    "last_change_password_date": null,
    "officer_authentication_type_id": null,
    "send_login_notice": null,
    "line_token": null,
    "ipd_order_type": null,
    "officer_cid": "",
    "send_moph_otp": null,
    "officer_cid_hash256": null
  },
  {
    "officer_id": 8,
    "officer_name": "[MASKED_FULLNAME]",
    "officer_group_list_text": null,
    "officer_login_name": "yuwa065",
    "emp_id": null,
    "officer_login_password_md5": "81dc9bdb52d04dc20036dbd8313ed055",
    "officer_login_password": null,
    "officer_pname": null,
    "officer_fname": null,
    "officer_lname": null,
    "officer_doctor_code": "125",
    "officer_phone": null,
    "officer_mobile": null,
    "officer_email": null,
    "auto_lockout": null,
    "auto_lockout_minute": null,
    "officer_line_id": null,
    "allow_med_template_transfer": null,
    "allow_oper_template_transfer": null,
    "officer_fax": null,
    "no_show_welcome": null,
    "officer_active": "Y",
    "last_change_password_date": null,
    "officer_authentication_type_id": null,
    "send_login_notice": null,
    "line_token": null,
    "ipd_order_type": null,
    "officer_cid": "",
    "send_moph_otp": null,
    "officer_cid_hash256": null
  }
]
```
