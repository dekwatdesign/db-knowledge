# `newborn`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_no | varchar(20) | NO | PRI |  |  |  |
| symptoms | varchar(250) | YES |  | NULL |  |  |
| birth_date | datetime | YES |  | NULL |  |  |
| birth_time | varchar(5) | YES |  | NULL |  |  |
| sex | varchar(10) | YES |  | NULL |  |  |
| age | varchar(10) | YES |  | NULL |  |  |
| weight | int(11) | YES |  | NULL |  |  |
| apgarscore | varchar(5) | YES |  | NULL |  |  |
| vit_k | datetime | YES |  | NULL |  |  |
| hbv | datetime | YES |  | NULL |  |  |
| thyroid | datetime | YES |  | NULL |  |  |
| treat_et | varchar(1) | YES |  | NULL |  |  |
| treat_et_value | varchar(10) | YES |  | NULL |  |  |
| treat_et_depth | varchar(5) | YES |  | NULL |  |  |
| treat_o2 | varchar(1) | YES |  | NULL |  |  |
| o2 | varchar(5) | YES |  | NULL |  |  |
| treat_ng | varchar(1) | YES |  | NULL |  |  |
| treat_fc | varchar(1) | YES |  | NULL |  |  |
| treat_bg | varchar(1) | YES |  | NULL |  |  |
| treat_bg_value | varchar(10) | YES |  | NULL |  |  |
| treat_iv | varchar(1) | YES |  | NULL |  |  |
| iv_text | varchar(250) | YES |  | NULL |  |  |
| assess_detail | text | YES |  | NULL |  |  |
| mather_age | varchar(5) | YES |  | NULL |  |  |
| mather_week | varchar(3) | YES |  | NULL |  |  |
| mather_days | varchar(3) | YES |  | NULL |  |  |
| mather_g | varchar(5) | YES |  | NULL |  |  |
| mather_p | varchar(5) | YES |  | NULL |  |  |
| mather_a | varchar(5) | YES |  | NULL |  |  |
| mather_problem | text | YES |  | NULL |  |  |

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
