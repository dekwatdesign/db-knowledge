# `token_account_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| token_account_type_id | int(11) | NO | PRI | 0 |  |  |
| token_account_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_token_account_type_name | token_account_type_name | yes | 1 |
| PRIMARY | token_account_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "token_account_type_id": 1,
    "token_account_type_name": "INET Certification Authorities"
  }
]
```
