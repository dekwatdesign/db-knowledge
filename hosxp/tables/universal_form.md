# `universal_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| universal_form_id | int(11) | NO | PRI | 0 |  |  |
| universal_form_name | varchar(200) | YES | UNI | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| form_datetime | datetime | YES |  | NULL |  |  |
| pe_form | char(1) | YES |  | NULL |  |  |
| form_script | longtext | YES |  | NULL |  |  |
| form_script_onload | longtext | YES |  | NULL |  |  |
| form_script_onsave | longtext | YES |  | NULL |  |  |
| form_width | int(11) | YES |  | NULL |  |  |
| form_height | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| universal_form_type_id | int(11) | YES |  | NULL |  |  |
| dws | char(1) | YES |  | NULL |  |  |
| public_update | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_universal_form_name | universal_form_name | yes | 1 |
| PRIMARY | universal_form_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "universal_form_id": 1,
    "universal_form_name": "แบบบันทึกข้อมูลการรับยาเดิม",
    "staff": "[MASKED_FULLNAME]",
    "form_datetime": "2023-06-26 10:04:04",
    "pe_form": "N",
    "form_script": null,
    "form_script_onload": null,
    "form_script_onsave": null,
    "form_width": 829,
    "form_height": 1200,
    "hos_guid": "{EB8314E7-783C-4EE7-886B-0A38BB66A998}",
    "universal_form_type_id": 1,
    "dws": "N",
    "public_update": null
  },
  {
    "universal_form_id": 4,
    "universal_form_name": "TECHNICIAN S OBSERVATIONS",
    "staff": "[MASKED_FULLNAME]",
    "form_datetime": "2011-09-24 12:46:45",
    "pe_form": "N",
    "form_script": null,
    "form_script_onload": null,
    "form_script_onsave": null,
    "form_width": 829,
    "form_height": 1100,
    "hos_guid": "{B5E5150C-E509-40BE-AE0E-7CA5F58ABCFF}",
    "universal_form_type_id": null,
    "dws": "N",
    "public_update": null
  },
  {
    "universal_form_id": 7,
    "universal_form_name": "แบบเฝ้าระวังการติดเชื้อในโรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "staff": "[MASKED_FULLNAME]",
    "form_datetime": "2011-09-23 16:03:07",
    "pe_form": "N",
    "form_script": null,
    "form_script_onload": null,
    "form_script_onsave": null,
    "form_width": 829,
    "form_height": 1500,
    "hos_guid": null,
    "universal_form_type_id": null,
    "dws": "N",
    "public_update": null
  },
  {
    "universal_form_id": 8,
    "universal_form_name": "คัดกรอง Stress test",
    "staff": "[MASKED_FULLNAME]",
    "form_datetime": "2011-09-28 10:36:59",
    "pe_form": "N",
    "form_script": null,
    "form_script_onload": null,
    "form_script_onsave": null,
    "form_width": 829,
    "form_height": 1050,
    "hos_guid": "{75C4DC79-ABE9-495F-BA1A-17CFDC6E6D7D}",
    "universal_form_type_id": null,
    "dws": "N",
    "public_update": null
  },
  {
    "universal_form_id": 9,
    "universal_form_name": "คัดกรอง Burden",
    "staff": "[MASKED_FULLNAME]",
    "form_datetime": "2011-10-22 15:51:50",
    "pe_form": "N",
    "form_script": null,
    "form_script_onload": null,
    "form_script_onsave": null,
    "form_width": 829,
    "form_height": 1100,
    "hos_guid": "{B2F9955C-E913-4252-801A-5BD367ABC22B}",
    "universal_form_type_id": null,
    "dws": "N",
    "public_update": null
  },
  {
    "universal_form_id": 11,
    "universal_form_name": "แบบสำรวจพัฒนาการเด็ก(PDDSQ) 4-18 ปี",
    "staff": "[MASKED_FULLNAME]",
    "form_datetime": "2011-10-12 14:28:56",
    "pe_form": "N",
    "form_script": null,
    "form_script_onload": null,
    "form_script_onsave": null,
    "form_width": 829,
    "form_height": 1000,
    "hos_guid": "{35B32C61-6BB9-4141-94B7-2CE4545F0E19}",
    "universal_form_type_id": null,
    "dws": "N",
    "public_update": null
  },
  {
    "universal_form_id": 12,
    "universal_form_name": "แบบประเมินสภาพผู้ป่วยจิตเวชเด็กและวัยรุ่น หอผู้ป่วยใน(1)",
    "staff": "[MASKED_FULLNAME]",
    "form_datetime": "2011-09-24 13:06:35",
    "pe_form": "N",
    "form_script": null,
    "form_script_onload": null,
    "form_script_onsave": null,
    "form_width": 750,
    "form_height": 650,
    "hos_guid": null,
    "universal_form_type_id": null,
    "dws": "N",
    "public_update": null
  },
  {
    "universal_form_id": 13,
    "universal_form_name": "แบบประเมินสภาพผู้ป่วยจิตเวชเด็กและวัยรุ่น หอผู้ป่วยใน(2)",
    "staff": "[MASKED_FULLNAME]",
    "form_datetime": "2011-09-24 14:21:58",
    "pe_form": "N",
    "form_script": null,
    "form_script_onload": null,
    "form_script_onsave": null,
    "form_width": 750,
    "form_height": 1050,
    "hos_guid": null,
    "universal_form_type_id": null,
    "dws": "N",
    "public_update": null
  }
]
```
