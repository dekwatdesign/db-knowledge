# `pttype_company_contact`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_company_contact_id | int(11) | NO | PRI | 0 |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| company_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni | pttype | yes | 1 |
| ix_uni | company_id | yes | 2 |
| ix_uni_index | company_id | yes | 1 |
| ix_uni_index | pttype | yes | 2 |
| PRIMARY | pttype_company_contact_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
