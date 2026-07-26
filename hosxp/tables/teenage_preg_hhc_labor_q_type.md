# `teenage_preg_hhc_labor_q_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_labor_q_type_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_hhc_labor_q_type_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_hhc_labor_q_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "teenage_preg_hhc_labor_q_type_id": 1,
    "teenage_preg_hhc_labor_q_type_name": "ข้อมูลเยี่ยมมารดา",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_q_type_id": 2,
    "teenage_preg_hhc_labor_q_type_name": "ข้อมูลเยี่ยมทารก",
    "hos_guid": null
  }
]
```
