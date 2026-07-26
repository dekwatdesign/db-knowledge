# `officer_authentication_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_authentication_type_id | int(11) | NO | PRI | 0 |  |  |
| officer_authentication_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_authentication_type_name | officer_authentication_type_name | yes | 1 |
| PRIMARY | officer_authentication_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "officer_authentication_type_id": 1,
    "officer_authentication_type_name": "Local Database"
  },
  {
    "officer_authentication_type_id": 2,
    "officer_authentication_type_name": "LDAP"
  }
]
```
