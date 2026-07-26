# `ovst_fee_schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_fee_schedule_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| nhso_fee_schedule_type_id | int(11) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_flag | int(11) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES | MUL | NULL |  |  |
| auto_opi_guid_1 | varchar(38) | YES |  | NULL |  |  |
| auto_opi_guid_2 | varchar(38) | YES |  | NULL |  |  |
| nhso_fee_schedule_sub_type_id | int(11) | YES |  | NULL |  |  |
| ucae | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_depcode | depcode | no | 1 |
| ix_vn_depcode | vn | no | 2 |
| ix_vn_nhso_fee_schedule_type_id | nhso_fee_schedule_type_id | yes | 1 |
| ix_vn_nhso_fee_schedule_type_id | vn | yes | 2 |
| PRIMARY | ovst_fee_schedule_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_fee_schedule_id": 1,
    "vn": "670201113425",
    "doctor_code": "187",
    "nhso_fee_schedule_type_id": 102,
    "update_datetime": "2024-03-14 14:41:27",
    "update_flag": null,
    "depcode": "008",
    "auto_opi_guid_1": null,
    "auto_opi_guid_2": null,
    "nhso_fee_schedule_sub_type_id": null,
    "ucae": null
  },
  {
    "ovst_fee_schedule_id": 2,
    "vn": "670201125610",
    "doctor_code": "187",
    "nhso_fee_schedule_type_id": 101,
    "update_datetime": "2024-03-14 14:41:27",
    "update_flag": null,
    "depcode": "008",
    "auto_opi_guid_1": null,
    "auto_opi_guid_2": null,
    "nhso_fee_schedule_sub_type_id": null,
    "ucae": null
  },
  {
    "ovst_fee_schedule_id": 3,
    "vn": "670201075153",
    "doctor_code": "187",
    "nhso_fee_schedule_type_id": 101,
    "update_datetime": "2024-03-14 14:41:27",
    "update_flag": null,
    "depcode": "008",
    "auto_opi_guid_1": null,
    "auto_opi_guid_2": null,
    "nhso_fee_schedule_sub_type_id": null,
    "ucae": null
  },
  {
    "ovst_fee_schedule_id": 4,
    "vn": "670201130030",
    "doctor_code": "187",
    "nhso_fee_schedule_type_id": 101,
    "update_datetime": "2024-03-14 14:41:27",
    "update_flag": null,
    "depcode": "008",
    "auto_opi_guid_1": null,
    "auto_opi_guid_2": null,
    "nhso_fee_schedule_sub_type_id": null,
    "ucae": null
  },
  {
    "ovst_fee_schedule_id": 5,
    "vn": "670201083006",
    "doctor_code": "187",
    "nhso_fee_schedule_type_id": 102,
    "update_datetime": "2024-03-14 14:41:27",
    "update_flag": null,
    "depcode": "008",
    "auto_opi_guid_1": null,
    "auto_opi_guid_2": null,
    "nhso_fee_schedule_sub_type_id": null,
    "ucae": null
  },
  {
    "ovst_fee_schedule_id": 6,
    "vn": "670201130106",
    "doctor_code": "187",
    "nhso_fee_schedule_type_id": 101,
    "update_datetime": "2024-03-14 14:41:27",
    "update_flag": null,
    "depcode": "008",
    "auto_opi_guid_1": null,
    "auto_opi_guid_2": null,
    "nhso_fee_schedule_sub_type_id": null,
    "ucae": null
  },
  {
    "ovst_fee_schedule_id": 7,
    "vn": "670201130034",
    "doctor_code": "187",
    "nhso_fee_schedule_type_id": 101,
    "update_datetime": "2024-03-14 14:41:28",
    "update_flag": null,
    "depcode": "008",
    "auto_opi_guid_1": null,
    "auto_opi_guid_2": null,
    "nhso_fee_schedule_sub_type_id": null,
    "ucae": null
  },
  {
    "ovst_fee_schedule_id": 8,
    "vn": "670201130018",
    "doctor_code": "187",
    "nhso_fee_schedule_type_id": 101,
    "update_datetime": "2024-03-14 14:41:28",
    "update_flag": null,
    "depcode": "008",
    "auto_opi_guid_1": null,
    "auto_opi_guid_2": null,
    "nhso_fee_schedule_sub_type_id": null,
    "ucae": null
  }
]
```
