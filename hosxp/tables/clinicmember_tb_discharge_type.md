# `clinicmember_tb_discharge_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_discharge_type_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_tb_discharge_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_tb_discharge_type_name | clinicmember_tb_discharge_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_tb_discharge_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "clinicmember_tb_discharge_type_id": 1,
    "clinicmember_tb_discharge_type_name": "รักษาหาย",
    "hos_guid": null
  },
  {
    "clinicmember_tb_discharge_type_id": 2,
    "clinicmember_tb_discharge_type_name": "รักษาครบ",
    "hos_guid": null
  },
  {
    "clinicmember_tb_discharge_type_id": 3,
    "clinicmember_tb_discharge_type_name": "ล้มเหลว",
    "hos_guid": null
  },
  {
    "clinicmember_tb_discharge_type_id": 4,
    "clinicmember_tb_discharge_type_name": "ตาย",
    "hos_guid": null
  },
  {
    "clinicmember_tb_discharge_type_id": 5,
    "clinicmember_tb_discharge_type_name": "ขาดยาติดต่อกันเกิน 2 เดือน",
    "hos_guid": null
  },
  {
    "clinicmember_tb_discharge_type_id": 6,
    "clinicmember_tb_discharge_type_name": "โอนออก",
    "hos_guid": null
  },
  {
    "clinicmember_tb_discharge_type_id": 7,
    "clinicmember_tb_discharge_type_name": "ไม่นำมาประเมิน",
    "hos_guid": null
  }
]
```
