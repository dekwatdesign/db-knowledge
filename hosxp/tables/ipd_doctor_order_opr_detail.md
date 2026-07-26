# `ipd_doctor_order_opr_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_opr_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_detail_id | int(11) | YES | UNI | NULL |  |  |
| ipt_oper_code | int(11) | YES |  | NULL |  |  |
| oper_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | ipd_doctor_order_detail_id | yes | 1 |
| PRIMARY | ipd_doctor_order_opr_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "ipd_doctor_order_opr_detail_id": 2,
    "ipd_doctor_order_detail_id": 19,
    "ipt_oper_code": 67,
    "oper_note": null
  }
]
```
