# `physic_pe_acsmvt_pain`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_acsmvt_pain_id | char(1) | NO | PRI |  |  |  |
| physic_pe_acsmvt_pain_name | varchar(250) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_acsmvt_pain_name | physic_pe_acsmvt_pain_name | no | 1 |
| PRIMARY | physic_pe_acsmvt_pain_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "physic_pe_acsmvt_pain_id": "1",
    "physic_pe_acsmvt_pain_name": "joint pain",
    "active_status": "Y"
  },
  {
    "physic_pe_acsmvt_pain_id": "2",
    "physic_pe_acsmvt_pain_name": "Resistance",
    "active_status": "Y"
  },
  {
    "physic_pe_acsmvt_pain_id": "3",
    "physic_pe_acsmvt_pain_name": "joint pain and Resistance",
    "active_status": "Y"
  }
]
```
