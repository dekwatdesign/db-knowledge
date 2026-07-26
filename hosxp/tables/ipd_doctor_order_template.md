# `ipd_doctor_order_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_template_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| template_name | varchar(200) | YES |  | NULL |  |  |
| pn_s | varchar(250) | YES |  | NULL |  |  |
| pn_o | varchar(250) | YES |  | NULL |  |  |
| pn_a | varchar(250) | YES |  | NULL |  |  |
| pn_risk | varchar(250) | YES |  | NULL |  |  |
| pn_sign | varchar(250) | YES |  | NULL |  |  |
| pn_p | varchar(250) | YES |  | NULL |  |  |
| pn_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_doctor_code_name | doctor_code | yes | 1 |
| ix_doctor_code_name | template_name | yes | 2 |
| PRIMARY | ipd_doctor_order_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ipd_doctor_order_template_id": 3,
    "doctor_code": "291",
    "template_name": "รับคำสั่ง",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": "รับคำสั่งแพทย์ order for one day และ cont. วันที่",
    "pn_note": null
  },
  {
    "ipd_doctor_order_template_id": 4,
    "doctor_code": "0006",
    "template_name": "รับOrder",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": "รับคำสั่งแพทย์ Order for one day และ Cont.วันที่",
    "pn_note": null
  },
  {
    "ipd_doctor_order_template_id": 6,
    "doctor_code": "0059",
    "template_name": "รับorder",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": "รับคำสั่งแพทย์ Order for one day และ Cont. วันที่",
    "pn_note": null
  }
]
```
