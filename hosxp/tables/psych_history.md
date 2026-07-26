# `psych_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_history_id | int(11) | NO | PRI | 0 |  |  |
| psych_history_date | date | YES |  | NULL |  |  |
| psych_history_name | varchar(255) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| psych_history_cause_refer | text | YES |  | NULL |  |  |
| psych_history_cc | text | YES |  | NULL |  |  |
| psych_history_hpi | text | YES |  | NULL |  |  |
| psych_history_pmh | text | YES |  | NULL |  |  |
| psych_history_family | text | YES |  | NULL |  |  |
| psych_history_family_child | text | YES |  | NULL |  |  |
| psych_history_family_present | text | YES |  | NULL |  |  |
| psych_history_money | text | YES |  | NULL |  |  |
| psych_history_heredity | text | YES |  | NULL |  |  |
| psych_history_person | text | YES |  | NULL |  |  |
| psych_history_pregnant | text | YES |  | NULL |  |  |
| psych_history_labour | text | YES |  | NULL |  |  |
| psych_history_careful | text | YES |  | NULL |  |  |
| psych_history_child_dev | text | YES |  | NULL |  |  |
| psych_history_child_nature | text | YES |  | NULL |  |  |
| psych_history_child_abnormal | text | YES |  | NULL |  |  |
| psych_history_ecucation | text | YES |  | NULL |  |  |
| psych_history_working | text | YES |  | NULL |  |  |
| psych_history_menses | text | YES |  | NULL |  |  |
| psych_history_military | text | YES |  | NULL |  |  |
| psych_history_sex | text | YES |  | NULL |  |  |
| psych_history_marry | text | YES |  | NULL |  |  |
| psych_history_sick | text | YES |  | NULL |  |  |
| psych_history_accident | text | YES |  | NULL |  |  |
| psych_history_narcotic | text | YES |  | NULL |  |  |
| psych_history_character | text | YES |  | NULL |  |  |
| psych_history_social | text | YES |  | NULL |  |  |
| psych_history_emotion | text | YES |  | NULL |  |  |
| psych_history_interest | text | YES |  | NULL |  |  |
| psych_history_habit | text | YES |  | NULL |  |  |
| psych_history_religion | varchar(255) | YES |  | NULL |  |  |
| psych_history_energy | text | YES |  | NULL |  |  |
| login | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| psych_history_family_home | text | YES |  | NULL |  |  |
| psych_history_social_prob | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
