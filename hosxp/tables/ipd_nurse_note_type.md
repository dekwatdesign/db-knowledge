# `ipd_nurse_note_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_note_type_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_note_type_name | varchar(200) | YES | UNI | NULL |  |  |
| is_default | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_nurse_note_type_name | ipd_nurse_note_type_name | yes | 1 |
| PRIMARY | ipd_nurse_note_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_nurse_note_type_id": 1,
    "ipd_nurse_note_type_name": "Doctor Note",
    "is_default": null
  },
  {
    "ipd_nurse_note_type_id": 2,
    "ipd_nurse_note_type_name": "Progress Note",
    "is_default": null
  },
  {
    "ipd_nurse_note_type_id": 3,
    "ipd_nurse_note_type_name": "Nurse Note",
    "is_default": null
  },
  {
    "ipd_nurse_note_type_id": 4,
    "ipd_nurse_note_type_name": "Doctor discharge note",
    "is_default": null
  },
  {
    "ipd_nurse_note_type_id": 5,
    "ipd_nurse_note_type_name": "Nurse discharge note",
    "is_default": null
  },
  {
    "ipd_nurse_note_type_id": 6,
    "ipd_nurse_note_type_name": "Psychology Note",
    "is_default": null
  },
  {
    "ipd_nurse_note_type_id": 7,
    "ipd_nurse_note_type_name": "Occupational Therapy Note",
    "is_default": null
  },
  {
    "ipd_nurse_note_type_id": 8,
    "ipd_nurse_note_type_name": "Special Education Note",
    "is_default": null
  }
]
```
