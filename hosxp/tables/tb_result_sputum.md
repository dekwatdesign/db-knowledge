# `tb_result_sputum`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_result_sputum_id | int(11) | NO | PRI | 0 |  |  |
| tb_result_sputum_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_result_sputum_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "tb_result_sputum_id": 1,
    "tb_result_sputum_name": "ลบ",
    "hos_guid": null
  },
  {
    "tb_result_sputum_id": 2,
    "tb_result_sputum_name": "บวก",
    "hos_guid": null
  },
  {
    "tb_result_sputum_id": 3,
    "tb_result_sputum_name": "ไม่ได้ตรวจ",
    "hos_guid": null
  },
  {
    "tb_result_sputum_id": 4,
    "tb_result_sputum_name": "เสียชีวิต",
    "hos_guid": null
  },
  {
    "tb_result_sputum_id": 5,
    "tb_result_sputum_name": "ขาดยาติดต่อกันเกิน 2 เดือน",
    "hos_guid": null
  },
  {
    "tb_result_sputum_id": 6,
    "tb_result_sputum_name": "โอนออก",
    "hos_guid": null
  },
  {
    "tb_result_sputum_id": 7,
    "tb_result_sputum_name": "ไม่นำมาประเมิน",
    "hos_guid": null
  }
]
```
