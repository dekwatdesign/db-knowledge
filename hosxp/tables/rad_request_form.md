# `rad_request_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rad_request_form_id | int(11) | NO | PRI | 0 |  |  |
| rad_request_form_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rad_request_form_name | rad_request_form_name | yes | 1 |
| PRIMARY | rad_request_form_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rad_request_form_id": 1,
    "rad_request_form_name": "ข้อบ่งใช้ของยา Ceftazidime (Fortum)"
  },
  {
    "rad_request_form_id": 2,
    "rad_request_form_name": "ข้อบ่งใช้ของยา Fosfomycin"
  },
  {
    "rad_request_form_id": 3,
    "rad_request_form_name": "ข้อบ่งใช้ของยา Piperacillin / tazobactam (Tazocin)"
  },
  {
    "rad_request_form_id": 4,
    "rad_request_form_name": "ข้อบ่งใช้ของยา Cefoperazone / sulbactam (Sulperazon)"
  },
  {
    "rad_request_form_id": 5,
    "rad_request_form_name": "ข้อบ่งใช้ของยา Imipemem (Tienam)"
  },
  {
    "rad_request_form_id": 6,
    "rad_request_form_name": "ข้อบ่งใช้ของยา Meropenem (Meronem)"
  },
  {
    "rad_request_form_id": 7,
    "rad_request_form_name": "ข้อบ่งใช้ของยา Doripenem (Doribax)"
  },
  {
    "rad_request_form_id": 8,
    "rad_request_form_name": "ข้อบ่งใช้ของยา Ciprofloxacin (Ciprobay)"
  }
]
```
