# `rcpt_deposit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_deposit_type_id | int(11) | NO | PRI | 0 |  |  |
| rcpt_deposit_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rcpt_deposit_type_name | rcpt_deposit_type_name | yes | 1 |
| PRIMARY | rcpt_deposit_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "rcpt_deposit_type_id": 1,
    "rcpt_deposit_type_name": "เงินสด"
  },
  {
    "rcpt_deposit_type_id": 2,
    "rcpt_deposit_type_name": "บัตรเครดิต"
  }
]
```
