# `trauma`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_no | varchar(20) | NO | PRI |  |  |  |
| symptoms | varchar(250) | YES |  | NULL |  |  |
| acc_date | datetime | YES |  | NULL |  |  |
| acc_time | varchar(5) | YES |  | NULL |  |  |
| sign_date | datetime | YES |  | NULL |  |  |
| sign_time | varchar(5) | YES |  | NULL |  |  |
| treat_et | varchar(1) | YES |  | NULL |  |  |
| treat_tt | varchar(1) | YES |  | NULL |  |  |
| treat_o2 | varchar(1) | YES |  | NULL |  |  |
| o2 | varchar(5) | YES |  | NULL |  |  |
| treat_ng | varchar(1) | YES |  | NULL |  |  |
| treat_fc | varchar(1) | YES |  | NULL |  |  |
| treat_iv | varchar(1) | YES |  | NULL |  |  |
| iv_text | varchar(250) | YES |  | NULL |  |  |
| treat_other | varchar(1) | YES |  | NULL |  |  |
| other_text | varchar(250) | YES |  | NULL |  |  |
| assess_detail | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | refer_no | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
