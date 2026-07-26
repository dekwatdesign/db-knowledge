# `palliative_care_recommend`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_recommend_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_recommend_text | varchar(255) | YES |  | NULL |  |  |
| palliative_care_recommend_pain | varchar(255) | YES |  | NULL |  |  |
| palliative_care_recommend_mind | varchar(255) | YES |  | NULL |  |  |
| palliative_care_recommend_social | varchar(255) | YES |  | NULL |  |  |
| palliative_care_recommend_spirit | varchar(255) | YES |  | NULL |  |  |
| palliative_care_recommend_community | varchar(255) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(10) | YES |  | NULL |  |  |
| palliative_care_recommend_date | date | YES |  | NULL |  |  |
| palliative_care_home_visit_id | int(11) | YES |  | NULL |  |  |
| doctor_code | char(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_recommend_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
