# `ckup_comp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_comp_id | int(11) | NO | PRI | 0 |  |  |
| ckup_comp_name | varchar(255) | YES |  | NULL |  |  |
| ckup_comp_address | varchar(255) | YES |  | NULL |  |  |
| chwpart | varchar(3) | YES |  | NULL |  |  |
| amppart | varchar(3) | YES |  | NULL |  |  |
| tmbpart | varchar(3) | YES |  | NULL |  |  |
| ckup_comp_phone | varchar(255) | YES |  | NULL |  |  |
| ckup_comp_email | varchar(255) | YES |  | NULL |  |  |
| ckup_comp_website | varchar(255) | YES |  | NULL |  |  |
| ckup_comp_postcode | varchar(255) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_emp_dep_id | emp_dep_id | no | 1 |
| PRIMARY | ckup_comp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
