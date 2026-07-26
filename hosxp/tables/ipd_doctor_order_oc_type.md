# `ipd_doctor_order_oc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| is_continue | char(1) | NO | PRI |  |  |  |
| is_continue_name | varchar(50) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_is_continue_name | is_continue_name | yes | 1 |
| PRIMARY | is_continue | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "is_continue": "Y",
    "is_continue_name": "Continue"
  },
  {
    "is_continue": "N",
    "is_continue_name": "One Day"
  }
]
```
