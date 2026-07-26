# `emp_social_relation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_social_relation_id | int(11) | NO | PRI | 0 |  |  |
| emp_social_relation_fullname | varchar(100) | YES |  | NULL |  |  |
| emp_social_relation_tel | varchar(50) | YES |  | NULL |  |  |
| emp_social_relation_email | varchar(50) | YES |  | NULL |  |  |
| emp_social_relation_address | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_id | int(11) | YES | MUL | NULL |  |  |
| emp_social_relation_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsocial_relation_type36 | emp_social_relation_type_id | no | 1 |
| ix_Refsocial_welfare21 | emp_social_welfare_id | no | 1 |
| PRIMARY | emp_social_relation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
