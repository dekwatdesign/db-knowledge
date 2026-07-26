# `emp_social_claim`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_social_claim_id | int(11) | NO | PRI | 0 |  |  |
| emp_social_claim_money | double(15,2) | YES |  | NULL |  |  |
| emp_social_claim_no | char(20) | YES |  | NULL |  |  |
| emp_social_claim_expire | date | YES |  | NULL |  |  |
| emp_social_welfare_id | int(11) | YES | MUL | NULL |  |  |
| emp_social_claim_type_id | char(2) | YES | MUL | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsocial_claim_type35 | emp_social_claim_type_id | no | 1 |
| ix_Refsocial_welfare20 | emp_social_welfare_id | no | 1 |
| PRIMARY | emp_social_claim_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
