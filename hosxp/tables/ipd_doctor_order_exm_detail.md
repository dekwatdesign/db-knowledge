# `ipd_doctor_order_exm_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_exm_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_detail_id | int(11) | YES | UNI | NULL |  |  |
| examination_item_id | int(11) | YES |  | NULL |  |  |
| examination_type_id | int(11) | YES |  | NULL |  |  |
| exam_note | text | YES |  | NULL |  |  |
| ext_form_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | ipd_doctor_order_detail_id | yes | 1 |
| PRIMARY | ipd_doctor_order_exm_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ipd_doctor_order_exm_detail_id": 3,
    "ipd_doctor_order_detail_id": 419,
    "examination_item_id": 13,
    "examination_type_id": 4,
    "exam_note": "ATK ก่อน admit\r\nCBC, BUN, Cr, Electrolyte, LFT, BS, Lipid profile พรุ่งนี้เช้า (24/12/68)",
    "ext_form_name": null
  },
  {
    "ipd_doctor_order_exm_detail_id": 4,
    "ipd_doctor_order_detail_id": 438,
    "examination_item_id": 23,
    "examination_type_id": 4,
    "exam_note": "เพิ่ม TFT, Prolactin level",
    "ext_form_name": null
  }
]
```
