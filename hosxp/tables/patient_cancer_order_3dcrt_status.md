# `patient_cancer_order_3dcrt_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_order_3dcrt_status_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_order_3dcrt_status_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_order_3dcrt_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "patient_cancer_order_3dcrt_status_id": 0,
    "patient_cancer_order_3dcrt_status_name": "ยังไม่ทำ",
    "hos_guid": null
  },
  {
    "patient_cancer_order_3dcrt_status_id": 1,
    "patient_cancer_order_3dcrt_status_name": "รับคำสั่งแล้ว",
    "hos_guid": null
  },
  {
    "patient_cancer_order_3dcrt_status_id": 2,
    "patient_cancer_order_3dcrt_status_name": "ทำแล้ว",
    "hos_guid": null
  }
]
```
