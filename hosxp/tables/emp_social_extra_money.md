# `emp_social_extra_money`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_social_extra_money_id | int(11) | NO | PRI | 0 |  |  |
| emp_social_extra_money_topic | varchar(100) | YES |  | NULL |  |  |
| emp_social_extra_money | decimal(10,0) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| emp_social_welfare_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsocial_welfare22 | emp_social_welfare_id | no | 1 |
| PRIMARY | emp_social_extra_money_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
