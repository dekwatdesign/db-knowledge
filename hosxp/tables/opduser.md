# `opduser`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| loginname | varchar(250) | NO | PRI |  |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| password | varchar(250) | YES | MUL | NULL |  |  |
| passweb | varchar(250) | YES |  | NULL |  |  |
| accessright | text | YES |  | NULL |  |  |
| department | varchar(250) | YES | MUL | NULL |  |  |
| departmentposition | varchar(250) | YES |  | NULL |  |  |
| entryposition | varchar(250) | YES |  | NULL |  |  |
| picture | longblob | YES |  | NULL |  |  |
| startfullscreen | char(1) | YES |  | NULL |  |  |
| doctorcode | varchar(15) | YES | MUL | NULL |  |  |
| drug_access_level | tinyint(4) | YES |  | NULL |  |  |
| groupname | varchar(250) | YES | MUL | NULL |  |  |
| visible_menu | text | YES |  | NULL |  |  |
| viewallmenu | char(1) | YES |  | NULL |  |  |
| lab_staff | char(1) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| nhso_user | varchar(250) | YES |  | NULL |  |  |
| nhso_password | varchar(250) | YES |  | NULL |  |  |
| max_station | int(11) | YES |  | NULL |  |  |
| show_tip | char(1) | YES |  | NULL |  |  |
| password_expire_date | date | YES |  | NULL |  |  |
| password_recheck_date | int(11) | YES |  | NULL |  |  |
| new_password_date | date | YES |  | NULL |  |  |
| check_lab_password | char(1) | YES |  | NULL |  |  |
| pcu_user | char(1) | YES |  | NULL |  |  |
| account_disable | char(1) | YES |  | NULL |  |  |
| restrict_ward_access | char(1) | YES |  | NULL |  |  |
| real_staff | char(1) | YES |  | NULL |  |  |
| restrict_clinic_access | char(1) | YES |  | NULL |  |  |
| no_lab_result_display | char(1) | YES |  | NULL |  |  |
| no_doctor_consult_display | char(1) | YES |  | NULL |  |  |
| no_announce_display | char(1) | YES |  | NULL |  |  |
| announce_read_count | int(11) | YES |  | NULL |  |  |
| xray_staff | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| lab_check_password | char(1) | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| auto_logout_minute | int(11) | YES |  | NULL |  |  |
| iclaim_jwt | text | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| moph_acc_user | varchar(50) | YES |  | NULL |  |  |
| moph_acc_password | varchar(250) | YES |  | NULL |  |  |
| send_moph_otp | char(1) | YES |  | NULL |  |  |
| password_text | varchar(32) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| department | department | no | 1 |
| groupname | groupname | no | 1 |
| ix_cid | cid | no | 1 |
| ix_doctorcode | doctorcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| name | name | no | 1 |
| password | password | no | 1 |
| PRIMARY | loginname | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "loginname": "a",
    "name": "[MASKED_FULLNAME]",
    "password": "0cc175b9c0f1b6a831c399e269772661",
    "passweb": "0cc175b9c0f1b6a831c399e269772661",
    "accessright": "[][opd]",
    "department": "a",
    "departmentposition": null,
    "entryposition": null,
    "picture": null,
    "startfullscreen": null,
    "doctorcode": "0",
    "drug_access_level": null,
    "groupname": "Admin",
    "visible_menu": null,
    "viewallmenu": null,
    "lab_staff": null,
    "hospital_department_id": null,
    "nhso_user": null,
    "nhso_password": null,
    "max_station": null,
    "show_tip": null,
    "password_expire_date": null,
    "password_recheck_date": null,
    "new_password_date": null,
    "check_lab_password": null,
    "pcu_user": null,
    "account_disable": null,
    "restrict_ward_access": null,
    "real_staff": null,
    "restrict_clinic_access": null,
    "no_lab_result_display": null,
    "no_doctor_consult_display": null,
    "no_announce_display": null,
    "announce_read_count": null,
    "xray_staff": null,
    "hos_guid": "{FD684C19-644B-47B4-8D7F-71E9EC3EFD9B}",
    "lab_check_password": null,
    "cid": null,
    "hos_guid_ext": null,
    "auto_logout_minute": null,
    "iclaim_jwt": null,
    "hospcode": null,
    "moph_acc_user": null,
    "moph_acc_password": null,
    "send_moph_otp": null,
    "password_text": null
  },
  {
    "loginname": "ant",
    "name": "[MASKED_FULLNAME]",
    "password": "0cc175b9c0f1b6a831c399e269772661",
    "passweb": "0cc175b9c0f1b6a831c399e269772661",
    "accessright": "[][opd]",
    "department": "a",
    "departmentposition": null,
    "entryposition": null,
    "picture": null,
    "startfullscreen": null,
    "doctorcode": "0",
    "drug_access_level": null,
    "groupname": "Admin",
    "visible_menu": null,
    "viewallmenu": null,
    "lab_staff": null,
    "hospital_department_id": null,
    "nhso_user": null,
    "nhso_password": null,
    "max_station": null,
    "show_tip": null,
    "password_expire_date": null,
    "password_recheck_date": null,
    "new_password_date": null,
    "check_lab_password": null,
    "pcu_user": null,
    "account_disable": null,
    "restrict_ward_access": null,
    "real_staff": null,
    "restrict_clinic_access": null,
    "no_lab_result_display": null,
    "no_doctor_consult_display": null,
    "no_announce_display": null,
    "announce_read_count": null,
    "xray_staff": null,
    "hos_guid": "{085C8A95-DA38-403A-B378-BCBCA1661E7B}",
    "lab_check_password": null,
    "cid": null,
    "hos_guid_ext": null,
    "auto_logout_minute": null,
    "iclaim_jwt": null,
    "hospcode": null,
    "moph_acc_user": null,
    "moph_acc_password": null,
    "send_moph_otp": null,
    "password_text": null
  },
  {
    "loginname": "bms",
    "name": "[MASKED_FULLNAME]",
    "password": "v2:oqwua5v5Tu1a8joxyYNTmezq79Ngx9aaqsMtTeB/v0g=",
    "passweb": "81dc9bdb52d04dc20036dbd8313ed055",
    "accessright": "[][ADMIN][View_EMR][VIEW_OPD_DOCUMENT_SCAN][ADMIN][FIS_LOGIN][HSK_OUT][HSK_LOGIN][HSK_MENU_IC][HSK_MENU_PSYCHOLOGY][HSK_MENU_COMMUNITYPSY][HSK_MENU_DENTAL][HSK_MENU_LAB][HSK_MENU_OPD][HSK_MENU_IPD][HSK_MENU_PHARMACY][HSK_MENU_NUTRITION][HSK_MENU_HOMEHEALTH][HSK_MENU_XRAY][HSK_MENU_MEDICALRECORD][HSK_MENU_REHABILITATION][HSK_MENU_IPD_INSPECT][HSK_MENU_SOCIAL_WORKER][HSK_MENU_DISPENSE][HSK_MENU_ASSESSMENT][HSK_UNLOCK][HSK_MENU_DOCTOR]",
    "department": "",
    "departmentposition": "",
    "entryposition": "ผู้ดูแลระบบ",
    "picture": "[MASKED_AVATAR]",
    "startfullscreen": "N",
    "doctorcode": "999",
    "drug_access_level": 0,
    "groupname": "Admin",
    "visible_menu": "",
    "viewallmenu": "Y",
    "lab_staff": "N",
    "hospital_department_id": null,
    "nhso_user": "",
    "nhso_password": "v2:B8s4bSvyOvX99y2J3kNknAlVWKuvo9/3Fgn8ctECu+w=",
    "max_station": null,
    "show_tip": "N",
    "password_expire_date": null,
    "password_recheck_date": null,
    "new_password_date": null,
    "check_lab_password": null,
    "pcu_user": null,
    "account_disable": "N",
    "restrict_ward_access": null,
    "real_staff": null,
    "restrict_clinic_access": null,
    "no_lab_result_display": null,
    "no_doctor_consult_display": null,
    "no_announce_display": null,
    "announce_read_count": 0,
    "xray_staff": null,
    "hos_guid": null,
    "lab_check_password": null,
    "cid": null,
    "hos_guid_ext": null,
    "auto_logout_minute": null,
    "iclaim_jwt": null,
    "hospcode": null,
    "moph_acc_user": null,
    "moph_acc_password": null,
    "send_moph_otp": null,
    "password_text": null
  },
  {
    "loginname": "chatchawal",
    "name": "[MASKED_FULLNAME]",
    "password": "70263585C348D64B832438A97AD99A408B8FA5F7B78635F121B38F6B39F5171A3BE410887BF5EC636F9BC9",
    "passweb": "39f13d60b3f6fbe0ba1636b0a9283c50",
    "accessright": "[][ADMIN][View_EMR][VIEW_OPD_DOCUMENT_SCAN][ADMIN][FIS_LOGIN][HSK_OUT][HSK_LOGIN][HSK_MENU_IC][HSK_MENU_PSYCHOLOGY][HSK_MENU_COMMUNITYPSY][HSK_MENU_DENTAL][HSK_MENU_LAB][HSK_MENU_OPD][HSK_MENU_IPD][HSK_MENU_PHARMACY][HSK_MENU_NUTRITION][HSK_MENU_HOMEHEALTH][HSK_MENU_XRAY][HSK_MENU_MEDICALRECORD][HSK_MENU_REHABILITATION][HSK_MENU_IPD_INSPECT][HSK_MENU_SOCIAL_WORKER][HSK_MENU_DISPENSE][HSK_MENU_ASSESSMENT][HSK_UNLOCK][HSK_MENU_DOCTOR]",
    "department": "",
    "departmentposition": "",
    "entryposition": "นักวิชาการคอมพิวเตอร์ปฏิบัติการ",
    "picture": "[MASKED_AVATAR]",
    "startfullscreen": "N",
    "doctorcode": "187",
    "drug_access_level": null,
    "groupname": "Admin",
    "visible_menu": "",
    "viewallmenu": "Y",
    "lab_staff": "N",
    "hospital_department_id": null,
    "nhso_user": "",
    "nhso_password": "70263585C348D64B832438A97AD99A408B8FA5F7B78635F121B38F6B39F5171A",
    "max_station": null,
    "show_tip": "N",
    "password_expire_date": "2025-04-14",
    "password_recheck_date": null,
    "new_password_date": "2025-01-14",
    "check_lab_password": null,
    "pcu_user": null,
    "account_disable": "N",
    "restrict_ward_access": null,
    "real_staff": null,
    "restrict_clinic_access": null,
    "no_lab_result_display": null,
    "no_doctor_consult_display": null,
    "no_announce_display": null,
    "announce_read_count": 830,
    "xray_staff": null,
    "hos_guid": null,
    "lab_check_password": null,
    "cid": null,
    "hos_guid_ext": null,
    "auto_logout_minute": null,
    "iclaim_jwt": null,
    "hospcode": null,
    "moph_acc_user": null,
    "moph_acc_password": null,
    "send_moph_otp": null,
    "password_text": "@42328oo12*"
  },
  {
    "loginname": "joy",
    "name": "[MASKED_FULLNAME]",
    "password": "0cc175b9c0f1b6a831c399e269772661",
    "passweb": "0cc175b9c0f1b6a831c399e269772661",
    "accessright": "[][opd]",
    "department": "a",
    "departmentposition": null,
    "entryposition": null,
    "picture": null,
    "startfullscreen": null,
    "doctorcode": "0",
    "drug_access_level": null,
    "groupname": "Admin",
    "visible_menu": null,
    "viewallmenu": null,
    "lab_staff": null,
    "hospital_department_id": null,
    "nhso_user": null,
    "nhso_password": null,
    "max_station": null,
    "show_tip": null,
    "password_expire_date": null,
    "password_recheck_date": null,
    "new_password_date": null,
    "check_lab_password": null,
    "pcu_user": null,
    "account_disable": null,
    "restrict_ward_access": null,
    "real_staff": null,
    "restrict_clinic_access": null,
    "no_lab_result_display": null,
    "no_doctor_consult_display": null,
    "no_announce_display": null,
    "announce_read_count": null,
    "xray_staff": null,
    "hos_guid": "{EDCD27C1-FFF8-4301-B20B-E2D62146DCF6}",
    "lab_check_password": null,
    "cid": null,
    "hos_guid_ext": null,
    "auto_logout_minute": null,
    "iclaim_jwt": null,
    "hospcode": null,
    "moph_acc_user": null,
    "moph_acc_password": null,
    "send_moph_otp": null,
    "password_text": null
  },
  {
    "loginname": "puttapan_ycap",
    "name": "[MASKED_FULLNAME]",
    "password": "70263585C348D64B832438A97AD99A408B8FA5F7B78635F121B38F6B39F5171A9F4FF92BA24BD986BB2204",
    "passweb": "c896ed17efb00e67f4eb4a809542b958",
    "accessright": "[][ADMIN][View_EMR][VIEW_OPD_DOCUMENT_SCAN][ADMIN][FIS_LOGIN][HSK_OUT][HSK_LOGIN][HSK_MENU_IC][HSK_MENU_PSYCHOLOGY][HSK_MENU_COMMUNITYPSY][HSK_MENU_DENTAL][HSK_MENU_LAB][HSK_MENU_OPD][HSK_MENU_IPD][HSK_MENU_PHARMACY][HSK_MENU_NUTRITION][HSK_MENU_HOMEHEALTH][HSK_MENU_XRAY][HSK_MENU_MEDICALRECORD][HSK_MENU_REHABILITATION][HSK_MENU_IPD_INSPECT][HSK_MENU_SOCIAL_WORKER][HSK_MENU_DISPENSE][HSK_MENU_ASSESSMENT][HSK_UNLOCK][HSK_MENU_DOCTOR]",
    "department": null,
    "departmentposition": null,
    "entryposition": "นักวิชาการคอมพิวเตอร์",
    "picture": "[MASKED_AVATAR]",
    "startfullscreen": null,
    "doctorcode": "0037",
    "drug_access_level": null,
    "groupname": "Admin",
    "visible_menu": "",
    "viewallmenu": "Y",
    "lab_staff": "N",
    "hospital_department_id": null,
    "nhso_user": null,
    "nhso_password": null,
    "max_station": null,
    "show_tip": null,
    "password_expire_date": null,
    "password_recheck_date": null,
    "new_password_date": null,
    "check_lab_password": null,
    "pcu_user": null,
    "account_disable": "N",
    "restrict_ward_access": null,
    "real_staff": null,
    "restrict_clinic_access": null,
    "no_lab_result_display": null,
    "no_doctor_consult_display": null,
    "no_announce_display": null,
    "announce_read_count": 161,
    "xray_staff": null,
    "hos_guid": null,
    "lab_check_password": null,
    "cid": null,
    "hos_guid_ext": null,
    "auto_logout_minute": null,
    "iclaim_jwt": null,
    "hospcode": null,
    "moph_acc_user": null,
    "moph_acc_password": null,
    "send_moph_otp": null,
    "password_text": null
  },
  {
    "loginname": "regis1",
    "name": "[MASKED_FULLNAME]",
    "password": "70263585C348D64B832438A97AD99A408B8FA5F7B78635F121B38F6B39F5171A33E74AD6",
    "passweb": "81dc9bdb52d04dc20036dbd8313ed055",
    "accessright": "[][APPOINTMENT][ARREAR_LIST][ARREAR_LOST_LIST][CLINIC][DEBT_LIST][DELETE_FINANCE_RX][DOCTOR_PATIENT_LIST][DRUG_ALLERGY_ENTRY][EMR_VIEW][EndUser_Report][ER1][FINANCE_CHANGE_PTTYPE][FINANCE_REPORT][GOV_CLINIC][LAB1][LAB_PRINT][LABORDER][ONE_STOP_SERVICE][OPD-Rent][OPD_CUSTOM_SEARCH][OPD_FINANCE_EDIT_RX][OPD_LABORDER][RCPT_ACCOUNT_ABORT][RCPT_ACCOUNT_LOCK][RCPT_LIST][RCPT_REGIST][Refer_Entry][RX_MODE3][Screen_Change_Pttype][SYS_OPD_REGIST_REPORT][SYS_REPORT][View_EMR][VIEW_LAB][VIEW_OPD_DOCUMENT_SCAN][VIEW_PATIENT_REAL_NAME][View_PT_Info][FIS_LOGIN][HSK_OUT][HSK_LOGIN][HSK_MENU_IC][HSK_MENU_PSYCHOLOGY][HSK_MENU_COMMUNITYPSY][HSK_MENU_DENTAL][HSK_MENU_LAB][HSK_MENU_OPD][HSK_MENU_IPD][HSK_MENU_PHARMACY][HSK_MENU_NUTRITION][HSK_MENU_HOMEHEALTH][HSK_MENU_XRAY][HSK_MENU_MEDICALRECORD][HSK_MENU_REHABILITATION][HSK_MENU_IPD_INSPECT][HSK_MENU_SOCIAL_WORKER][HSK_MENU_DISPENSE][HSK_MENU_ASSESSMENT][HSK_UNLOCK][HSK_MENU_DOCTOR][SCREEN][USCN][OPD4][OPD3][EOV1][RXS][OPD2]",
    "department": null,
    "departmentposition": null,
    "entryposition": null,
    "picture": "[MASKED_AVATAR]",
    "startfullscreen": null,
    "doctorcode": "306",
    "drug_access_level": null,
    "groupname": "ผู้ช่วยเหลือคนไข้ OPD",
    "visible_menu": "",
    "viewallmenu": "Y",
    "lab_staff": "N",
    "hospital_department_id": null,
    "nhso_user": null,
    "nhso_password": null,
    "max_station": 1,
    "show_tip": null,
    "password_expire_date": null,
    "password_recheck_date": null,
    "new_password_date": null,
    "check_lab_password": null,
    "pcu_user": null,
    "account_disable": "Y",
    "restrict_ward_access": null,
    "real_staff": null,
    "restrict_clinic_access": null,
    "no_lab_result_display": null,
    "no_doctor_consult_display": null,
    "no_announce_display": null,
    "announce_read_count": 4,
    "xray_staff": null,
    "hos_guid": null,
    "lab_check_password": null,
    "cid": null,
    "hos_guid_ext": null,
    "auto_logout_minute": null,
    "iclaim_jwt": null,
    "hospcode": null,
    "moph_acc_user": null,
    "moph_acc_password": null,
    "send_moph_otp": null,
    "password_text": null
  },
  {
    "loginname": "regis10",
    "name": "[MASKED_FULLNAME]",
    "password": "70263585C348D64B832438A97AD99A408B8FA5F7B78635F121B38F6B39F5171A33E74AD6",
    "passweb": "81dc9bdb52d04dc20036dbd8313ed055",
    "accessright": "[][APPOINTMENT][CHANGE_IPT_WARD][CLINIC][DO_HN_MERGE][EMR_VIEW][EndUser_Report][ER1][HINSO_CHECK][INFORMATION_FRONT][IPT_CHANGE_WARD][LAB1][LABORDER][ONE_STOP_SERVICE][OPD-Rent][OPD_CHANGE_HN][OPD_CHANGE_PRENAME_AUTO][OPD_DELETE_HN][OPD_LABORDER][OPDCARD_LOCATION_ENTRY][OPDCARD_LOCK_PTTYPE][PCU_ACCOUNT1][PCU_ACCOUNT5][REFER_CENTRAL][Refer_Entry][REFER_IN_ENTRY][REFER_OUT_ENTRY][RIGHT_CHECK_CENTER][SAVE_ADMIT_DATA][Screen_Change_Pttype][SYS_REPORT][View_EMR][VIEW_LAB][VIEW_OPD_DOCUMENT_SCAN][VIEW_PATIENT_REAL_NAME][View_PT_Info][FIS_LOGIN][HSK_OUT][HSK_LOGIN][HSK_MENU_IC][HSK_MENU_PSYCHOLOGY][HSK_MENU_COMMUNITYPSY][HSK_MENU_DENTAL][HSK_MENU_LAB][HSK_MENU_OPD][HSK_MENU_IPD][HSK_MENU_PHARMACY][HSK_MENU_NUTRITION][HSK_MENU_HOMEHEALTH][HSK_MENU_MEDICALRECORD][HSK_MENU_REHABILITATION][HSK_MENU_IPD_INSPECT][HSK_MENU_SOCIAL_WORKER][HSK_MENU_DISPENSE][HSK_MENU_ASSESSMENT][HSK_UNLOCK][HSK_MENU_DOCTOR][OPDCModify][DOCTOR][SCREEN][OPD3][IPT2][OPDCEntry][OPD2][IPT1][IPT4][IPT3][IPT6][SendBM]",
    "department": null,
    "departmentposition": null,
    "entryposition": "เจ้าพนักงานธุรการ",
    "picture": "[MASKED_AVATAR]",
    "startfullscreen": null,
    "doctorcode": "216",
    "drug_access_level": null,
    "groupname": "เวชระเบียน",
    "visible_menu": "",
    "viewallmenu": "Y",
    "lab_staff": "N",
    "hospital_department_id": null,
    "nhso_user": null,
    "nhso_password": null,
    "max_station": 1,
    "show_tip": null,
    "password_expire_date": null,
    "password_recheck_date": null,
    "new_password_date": null,
    "check_lab_password": null,
    "pcu_user": null,
    "account_disable": "Y",
    "restrict_ward_access": null,
    "real_staff": null,
    "restrict_clinic_access": null,
    "no_lab_result_display": null,
    "no_doctor_consult_display": null,
    "no_announce_display": null,
    "announce_read_count": 0,
    "xray_staff": null,
    "hos_guid": null,
    "lab_check_password": null,
    "cid": null,
    "hos_guid_ext": null,
    "auto_logout_minute": null,
    "iclaim_jwt": null,
    "hospcode": null,
    "moph_acc_user": null,
    "moph_acc_password": null,
    "send_moph_otp": null,
    "password_text": null
  }
]
```
