# `ipd_nurse_eval_entry_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_eval_entry_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_note_id | int(11) | YES | MUL | NULL |  |  |
| ipd_nurse_eval_type_id | int(11) | YES |  | NULL |  |  |
| eval_score | int(11) | YES |  | NULL |  |  |
| eval_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | ipd_nurse_note_id | no | 1 |
| PRIMARY | ipd_nurse_eval_entry_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_nurse_eval_entry_detail_id": 25,
    "ipd_nurse_note_id": 1906,
    "ipd_nurse_eval_type_id": 1,
    "eval_score": 0,
    "eval_note": null
  },
  {
    "ipd_nurse_eval_entry_detail_id": 26,
    "ipd_nurse_note_id": 1906,
    "ipd_nurse_eval_type_id": 2,
    "eval_score": 0,
    "eval_note": null
  },
  {
    "ipd_nurse_eval_entry_detail_id": 27,
    "ipd_nurse_note_id": 1906,
    "ipd_nurse_eval_type_id": 3,
    "eval_score": 0,
    "eval_note": null
  },
  {
    "ipd_nurse_eval_entry_detail_id": 28,
    "ipd_nurse_note_id": 1906,
    "ipd_nurse_eval_type_id": 4,
    "eval_score": 0,
    "eval_note": null
  },
  {
    "ipd_nurse_eval_entry_detail_id": 29,
    "ipd_nurse_note_id": 1906,
    "ipd_nurse_eval_type_id": 5,
    "eval_score": 0,
    "eval_note": null
  },
  {
    "ipd_nurse_eval_entry_detail_id": 30,
    "ipd_nurse_note_id": 1906,
    "ipd_nurse_eval_type_id": 6,
    "eval_score": 0,
    "eval_note": null
  },
  {
    "ipd_nurse_eval_entry_detail_id": 31,
    "ipd_nurse_note_id": 1906,
    "ipd_nurse_eval_type_id": 7,
    "eval_score": 0,
    "eval_note": null
  },
  {
    "ipd_nurse_eval_entry_detail_id": 32,
    "ipd_nurse_note_id": 1906,
    "ipd_nurse_eval_type_id": 8,
    "eval_score": 0,
    "eval_note": null
  }
]
```
