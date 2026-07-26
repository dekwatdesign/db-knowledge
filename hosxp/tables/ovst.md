# `ovst`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| vn | varchar(13) | YES | UNI | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |
| oqueue | int(11) | YES |  | NULL |  |  |
| ovstist | char(2) | YES |  | NULL |  |  |
| ovstost | varchar(4) | YES |  | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| pttypeno | varchar(50) | YES | MUL | NULL |  |  |
| rfrics | char(1) | YES |  | NULL |  |  |
| rfrilct | varchar(9) | YES |  | NULL |  |  |
| rfrocs | char(1) | YES |  | NULL |  |  |
| rfrolct | varchar(9) | YES |  | NULL |  |  |
| spclty | char(2) | YES | MUL | NULL |  |  |
| rcpt_disease | varchar(100) | YES |  | NULL |  |  |
| hcode | varchar(5) | YES | MUL | NULL |  |  |
| cur_dep | char(3) | YES | MUL | NULL |  |  |
| cur_dep_busy | char(1) | YES |  | NULL |  |  |
| last_dep | char(3) | YES |  | NULL |  |  |
| cur_dep_time | time | YES |  | NULL |  |  |
| rx_queue | int(11) | YES |  | NULL |  |  |
| diag_text | varchar(250) | YES |  | NULL |  |  |
| pt_subtype | tinyint(4) | YES |  | NULL |  |  |
| main_dep | char(3) | YES |  | NULL |  |  |
| main_dep_queue | int(11) | YES |  | NULL |  |  |
| finance_summary_date | date | YES |  | NULL |  |  |
| visit_type | char(1) | YES |  | NULL |  |  |
| node_id | char(1) | YES |  | NULL |  |  |
| contract_id | int(11) | YES |  | NULL |  |  |
| waiting | char(1) | YES |  | NULL |  |  |
| rfri_icd10 | varchar(6) | YES |  | NULL |  |  |
| o_refer_number | int(11) | YES | MUL | NULL |  |  |
| has_insurance | char(1) | YES |  | NULL |  |  |
| i_refer_number | varchar(25) | YES | MUL | NULL |  |  |
| refer_type | char(1) | YES |  | NULL |  |  |
| o_refer_dep | varchar(5) | YES |  | NULL |  |  |
| staff | varchar(25) | YES | MUL | NULL |  |  |
| command_doctor | varchar(6) | YES |  | NULL |  |  |
| send_person | varchar(150) | YES |  | NULL |  |  |
| pt_priority | int(11) | YES |  | NULL |  |  |
| finance_lock | char(1) | YES |  | NULL |  |  |
| oldcode | varchar(20) | YES |  | NULL |  |  |
| sign_doctor | varchar(10) | YES |  | NULL |  |  |
| anonymous_visit | char(1) | YES | MUL | NULL |  |  |
| anonymous_vn | varchar(12) | YES | MUL | NULL |  |  |
| pt_capability_type_id | int(11) | YES |  | NULL |  |  |
| at_hospital | char(1) | YES |  | NULL |  |  |
| ovst_key | varchar(40) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_anonymous_vn | anonymous_vn | no | 1 |
| ix_doctor | doctor | no | 1 |
| ix_hcode | hcode | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hn_vstdate | hn | no | 1 |
| ix_hn_vstdate | vstdate | no | 2 |
| ix_i_refer_number | i_refer_number | no | 1 |
| ix_o_refer_number | o_refer_number | no | 1 |
| ix_pttype | pttype | no | 1 |
| ix_pttypeno | pttypeno | no | 1 |
| ix_spclty | spclty | no | 1 |
| ix_staff | staff | no | 1 |
| ix_vn_anonymous_vs_vn | vn | no | 1 |
| ix_vn_anonymous_vs_vn | anonymous_visit | no | 2 |
| ix_vn_anonymous_vs_vn | anonymous_vn | no | 3 |
| ix_vn_anonymous_vs_vn_index | anonymous_visit | no | 1 |
| ix_vn_anonymous_vs_vn_index | anonymous_vn | no | 2 |
| ix_vn_anonymous_vs_vn_index | vn | no | 3 |
| ix_vn_date | vn | no | 1 |
| ix_vn_date | vstdate | no | 2 |
| ix_vn_unique | vn | yes | 1 |
| ix_vstdate | vstdate | no | 1 |
| ix_vstdate_curdep | vstdate | no | 1 |
| ix_vstdate_curdep | cur_dep | no | 2 |
| ix_vstdate_curdep_index | cur_dep | no | 1 |
| ix_vstdate_curdep_index | vstdate | no | 2 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hos_guid": "",
    "vn": null,
    "hn": null,
    "an": null,
    "vstdate": null,
    "vsttime": null,
    "doctor": "065",
    "hospmain": null,
    "hospsub": null,
    "oqueue": null,
    "ovstist": null,
    "ovstost": "99",
    "pttype": "11",
    "pttypeno": null,
    "rfrics": null,
    "rfrilct": null,
    "rfrocs": "",
    "rfrolct": "",
    "spclty": "14",
    "rcpt_disease": null,
    "hcode": null,
    "cur_dep": null,
    "cur_dep_busy": null,
    "last_dep": null,
    "cur_dep_time": null,
    "rx_queue": null,
    "diag_text": null,
    "pt_subtype": null,
    "main_dep": "075",
    "main_dep_queue": null,
    "finance_summary_date": null,
    "visit_type": null,
    "node_id": null,
    "contract_id": null,
    "waiting": null,
    "rfri_icd10": null,
    "o_refer_number": null,
    "has_insurance": null,
    "i_refer_number": null,
    "refer_type": null,
    "o_refer_dep": null,
    "staff": null,
    "command_doctor": null,
    "send_person": null,
    "pt_priority": null,
    "finance_lock": null,
    "oldcode": null,
    "sign_doctor": null,
    "anonymous_visit": null,
    "anonymous_vn": null,
    "pt_capability_type_id": null,
    "at_hospital": null,
    "ovst_key": null
  },
  {
    "hos_guid": "{00003E87-C513-4DB1-BDA1-C148058F32A8}",
    "vn": "630723090134",
    "hn": "560000914",
    "an": null,
    "vstdate": "2020-07-23",
    "vsttime": "9:01:34",
    "doctor": "067",
    "hospmain": "10685",
    "hospsub": "24702",
    "oqueue": 176,
    "ovstist": "01",
    "ovstost": "99",
    "pttype": "11",
    "pttypeno": "ท7391506765",
    "rfrics": null,
    "rfrilct": null,
    "rfrocs": "",
    "rfrolct": "",
    "spclty": "09",
    "rcpt_disease": null,
    "hcode": "12251",
    "cur_dep": "999",
    "cur_dep_busy": "N",
    "last_dep": "016",
    "cur_dep_time": "13:23:30",
    "rx_queue": 11,
    "diag_text": null,
    "pt_subtype": 0,
    "main_dep": "018",
    "main_dep_queue": 7,
    "finance_summary_date": null,
    "visit_type": "I",
    "node_id": "",
    "contract_id": null,
    "waiting": "N",
    "rfri_icd10": null,
    "o_refer_number": null,
    "has_insurance": "N",
    "i_refer_number": null,
    "refer_type": null,
    "o_refer_dep": null,
    "staff": "[MASKED_FULLNAME]",
    "command_doctor": null,
    "send_person": null,
    "pt_priority": 0,
    "finance_lock": null,
    "oldcode": null,
    "sign_doctor": null,
    "anonymous_visit": null,
    "anonymous_vn": null,
    "pt_capability_type_id": null,
    "at_hospital": null,
    "ovst_key": null
  },
  {
    "hos_guid": "{00003EE8-3CF7-4B4A-87FB-6A52DB361646}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "530039949",
    "an": "",
    "vstdate": "2006-08-08",
    "vsttime": "7:00:00",
    "doctor": "006",
    "hospmain": "",
    "hospsub": "",
    "oqueue": 0,
    "ovstist": "01",
    "ovstost": "99",
    "pttype": "10",
    "pttypeno": "",
    "rfrics": "",
    "rfrilct": "",
    "rfrocs": "",
    "rfrolct": "",
    "spclty": "09",
    "rcpt_disease": "",
    "hcode": "",
    "cur_dep": "999",
    "cur_dep_busy": "",
    "last_dep": "",
    "cur_dep_time": "0:00:00",
    "rx_queue": 0,
    "diag_text": "Menopause (N95.1)",
    "pt_subtype": 0,
    "main_dep": "005",
    "main_dep_queue": 0,
    "finance_summary_date": null,
    "visit_type": "",
    "node_id": "",
    "contract_id": 0,
    "waiting": "",
    "rfri_icd10": "",
    "o_refer_number": 0,
    "has_insurance": "",
    "i_refer_number": "",
    "refer_type": "",
    "o_refer_dep": "",
    "staff": "",
    "command_doctor": "",
    "send_person": "",
    "pt_priority": 0,
    "finance_lock": "",
    "oldcode": null,
    "sign_doctor": null,
    "anonymous_visit": null,
    "anonymous_vn": null,
    "pt_capability_type_id": null,
    "at_hospital": null,
    "ovst_key": null
  },
  {
    "hos_guid": "{00004405-59AB-4C08-8738-451B28F4B61B}",
    "vn": "670219091159",
    "hn": "560001900",
    "an": "670000331",
    "vstdate": "2024-02-19",
    "vsttime": "9:11:59",
    "doctor": "068",
    "hospmain": "10685",
    "hospsub": "24028",
    "oqueue": 256,
    "ovstist": "01",
    "ovstost": "09",
    "pttype": "74",
    "pttypeno": " \tท74127175756",
    "rfrics": null,
    "rfrilct": null,
    "rfrocs": "",
    "rfrolct": "",
    "spclty": "09",
    "rcpt_disease": null,
    "hcode": "12251",
    "cur_dep": "036",
    "cur_dep_busy": "Y",
    "last_dep": "013",
    "cur_dep_time": "13:05:03",
    "rx_queue": null,
    "diag_text": null,
    "pt_subtype": 0,
    "main_dep": "036",
    "main_dep_queue": 2,
    "finance_summary_date": null,
    "visit_type": "I",
    "node_id": "",
    "contract_id": null,
    "waiting": "Y",
    "rfri_icd10": null,
    "o_refer_number": null,
    "has_insurance": "N",
    "i_refer_number": null,
    "refer_type": null,
    "o_refer_dep": null,
    "staff": "[MASKED_FULLNAME]",
    "command_doctor": null,
    "send_person": null,
    "pt_priority": 0,
    "finance_lock": null,
    "oldcode": null,
    "sign_doctor": null,
    "anonymous_visit": null,
    "anonymous_vn": null,
    "pt_capability_type_id": null,
    "at_hospital": null,
    "ovst_key": "8AED373442E8C79F7FD7996479D48150"
  },
  {
    "hos_guid": "{00004B9F-EBFC-412E-AF30-8E5C5704332D}",
    "vn": "580313080647",
    "hn": "580000436",
    "an": null,
    "vstdate": "2015-03-13",
    "vsttime": "8:06:47",
    "doctor": "069",
    "hospmain": "",
    "hospsub": "",
    "oqueue": 143,
    "ovstist": "01",
    "ovstost": "99",
    "pttype": "10",
    "pttypeno": "",
    "rfrics": null,
    "rfrilct": null,
    "rfrocs": null,
    "rfrolct": null,
    "spclty": "09",
    "rcpt_disease": "ไม่สามารถเอาสิ่งที่อยู่ในจิตใจมาสร้างเป็นภาษา",
    "hcode": "12251",
    "cur_dep": "999",
    "cur_dep_busy": "N",
    "last_dep": "016",
    "cur_dep_time": "10:50:23",
    "rx_queue": 23,
    "diag_text": null,
    "pt_subtype": 2,
    "main_dep": "014",
    "main_dep_queue": 1,
    "finance_summary_date": null,
    "visit_type": "I",
    "node_id": "",
    "contract_id": null,
    "waiting": "Y",
    "rfri_icd10": null,
    "o_refer_number": null,
    "has_insurance": "N",
    "i_refer_number": null,
    "refer_type": null,
    "o_refer_dep": null,
    "staff": "[MASKED_FULLNAME]",
    "command_doctor": null,
    "send_person": null,
    "pt_priority": 0,
    "finance_lock": null,
    "oldcode": null,
    "sign_doctor": null,
    "anonymous_visit": null,
    "anonymous_vn": null,
    "pt_capability_type_id": null,
    "at_hospital": null,
    "ovst_key": null
  },
  {
    "hos_guid": "{000064FF-C14C-431C-AD21-F82D8EAC3CF3}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "530098343",
    "an": "",
    "vstdate": "2001-11-27",
    "vsttime": "7:00:00",
    "doctor": "009",
    "hospmain": "",
    "hospsub": "",
    "oqueue": 0,
    "ovstist": "01",
    "ovstost": "99",
    "pttype": "10",
    "pttypeno": "",
    "rfrics": "",
    "rfrilct": "",
    "rfrocs": "",
    "rfrolct": "",
    "spclty": "09",
    "rcpt_disease": "",
    "hcode": "",
    "cur_dep": "999",
    "cur_dep_busy": "",
    "last_dep": "",
    "cur_dep_time": "0:00:00",
    "rx_queue": 0,
    "diag_text": "Mild mental retardation (F70.9)",
    "pt_subtype": 0,
    "main_dep": "001",
    "main_dep_queue": 0,
    "finance_summary_date": null,
    "visit_type": "",
    "node_id": "",
    "contract_id": 0,
    "waiting": "",
    "rfri_icd10": "",
    "o_refer_number": 0,
    "has_insurance": "",
    "i_refer_number": "",
    "refer_type": "",
    "o_refer_dep": "",
    "staff": "",
    "command_doctor": "",
    "send_person": "",
    "pt_priority": 0,
    "finance_lock": "",
    "oldcode": null,
    "sign_doctor": null,
    "anonymous_visit": null,
    "anonymous_vn": null,
    "pt_capability_type_id": null,
    "at_hospital": null,
    "ovst_key": null
  },
  {
    "hos_guid": "{00008293-FB70-4958-94B6-70189A65A485}",
    "vn": "560402133000",
    "hn": "530139354",
    "an": null,
    "vstdate": "2013-04-02",
    "vsttime": "13:30:00",
    "doctor": "093",
    "hospmain": "",
    "hospsub": "",
    "oqueue": 28,
    "ovstist": "02",
    "ovstost": "99",
    "pttype": "17",
    "pttypeno": "",
    "rfrics": null,
    "rfrilct": null,
    "rfrocs": "",
    "rfrolct": "",
    "spclty": "09",
    "rcpt_disease": "",
    "hcode": null,
    "cur_dep": "999",
    "cur_dep_busy": "N",
    "last_dep": "016",
    "cur_dep_time": "13:22:49",
    "rx_queue": null,
    "diag_text": null,
    "pt_subtype": 0,
    "main_dep": "031",
    "main_dep_queue": null,
    "finance_summary_date": null,
    "visit_type": null,
    "node_id": null,
    "contract_id": null,
    "waiting": null,
    "rfri_icd10": null,
    "o_refer_number": null,
    "has_insurance": null,
    "i_refer_number": null,
    "refer_type": null,
    "o_refer_dep": null,
    "staff": "[MASKED_FULLNAME]",
    "command_doctor": null,
    "send_person": null,
    "pt_priority": 0,
    "finance_lock": null,
    "oldcode": null,
    "sign_doctor": null,
    "anonymous_visit": null,
    "anonymous_vn": null,
    "pt_capability_type_id": null,
    "at_hospital": null,
    "ovst_key": null
  },
  {
    "hos_guid": "{000095FA-B997-4EBD-B900-6D03499DAB48}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "530166445",
    "an": "",
    "vstdate": "2002-07-15",
    "vsttime": "7:00:00",
    "doctor": "008",
    "hospmain": "",
    "hospsub": "",
    "oqueue": 0,
    "ovstist": "01",
    "ovstost": "99",
    "pttype": "10",
    "pttypeno": "",
    "rfrics": "",
    "rfrilct": "",
    "rfrocs": "",
    "rfrolct": "",
    "spclty": "09",
    "rcpt_disease": "",
    "hcode": "",
    "cur_dep": "999",
    "cur_dep_busy": "",
    "last_dep": "",
    "cur_dep_time": "0:00:00",
    "rx_queue": 0,
    "diag_text": "Learning problem (Z55)",
    "pt_subtype": 0,
    "main_dep": "000",
    "main_dep_queue": 0,
    "finance_summary_date": null,
    "visit_type": "",
    "node_id": "",
    "contract_id": 0,
    "waiting": "",
    "rfri_icd10": "",
    "o_refer_number": 0,
    "has_insurance": "",
    "i_refer_number": "",
    "refer_type": "",
    "o_refer_dep": "",
    "staff": "",
    "command_doctor": "",
    "send_person": "",
    "pt_priority": 0,
    "finance_lock": "",
    "oldcode": null,
    "sign_doctor": null,
    "anonymous_visit": null,
    "anonymous_vn": null,
    "pt_capability_type_id": null,
    "at_hospital": null,
    "ovst_key": null
  }
]
```
