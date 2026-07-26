# `tb_discharge_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_discharge_type_id | int(11) | NO | PRI | 0 |  |  |
| tb_discharge_type_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_discharge_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tb_discharge_type_id": 1,
    "tb_discharge_type_name": "รักษาหาย",
    "hos_guid": null
  },
  {
    "tb_discharge_type_id": 2,
    "tb_discharge_type_name": "รักษาครบ",
    "hos_guid": null
  },
  {
    "tb_discharge_type_id": 3,
    "tb_discharge_type_name": "ล้มเหลว (Confirmed MDR)",
    "hos_guid": null
  },
  {
    "tb_discharge_type_id": 4,
    "tb_discharge_type_name": "ล้มเหลว (Not confirmed MDR or DST not done)",
    "hos_guid": null
  },
  {
    "tb_discharge_type_id": 5,
    "tb_discharge_type_name": "ตาย",
    "hos_guid": null
  },
  {
    "tb_discharge_type_id": 6,
    "tb_discharge_type_name": "ขาดยาติดต่อกันเกิน 2 เดือน",
    "hos_guid": null
  },
  {
    "tb_discharge_type_id": 7,
    "tb_discharge_type_name": "โอนออก",
    "hos_guid": null
  },
  {
    "tb_discharge_type_id": 8,
    "tb_discharge_type_name": "ไม่นำมาประเมิน",
    "hos_guid": null
  }
]
```
