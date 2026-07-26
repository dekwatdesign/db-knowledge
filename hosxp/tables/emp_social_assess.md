# `emp_social_assess`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_social_assess_id | int(11) | NO | PRI | 0 |  |  |
| emp_social_assess_hos_date | date | YES |  | NULL |  |  |
| emp_social_assess_date | date | YES |  | NULL |  |  |
| emp_social_assess_detail | text | YES |  | NULL |  |  |
| emp_social_assess_begin_date | date | YES |  | NULL |  |  |
| emp_social_assess_end_date | date | YES |  | NULL |  |  |
| emp_social_assess_organ_lose | text | YES |  | NULL |  |  |
| emp_social_assess_send_phy | char(1) | YES |  | NULL |  |  |
| emp_social_assess_die_chk | char(1) | YES |  | NULL |  |  |
| emp_social_assess_die_detail | varchar(255) | YES |  | NULL |  |  |
| emp_social_assess_ablty_chk | char(1) | YES |  | NULL |  |  |
| emp_social_assess_ablty_detail | varchar(100) | YES |  | NULL |  |  |
| emp_social_assess_topic1 | varchar(255) | YES |  | NULL |  |  |
| emp_social_assess_topic2 | varchar(255) | YES |  | NULL |  |  |
| emp_social_assess_topic3 | varchar(255) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| emp_social_welfare_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsocial_welfare23 | emp_social_welfare_id | no | 1 |
| PRIMARY | emp_social_assess_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
