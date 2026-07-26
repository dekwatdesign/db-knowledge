# `company_contact_discount`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| company_discount_id | int(11) | NO | PRI | 0 |  |  |
| company_id | int(11) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_company_id | company_id | no | 1 |
| PRIMARY | company_discount_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
