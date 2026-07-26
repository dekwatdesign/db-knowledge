# `risk_report_web`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_id | int(11) | NO | PRI | 0 |  |  |
| report_date_time | datetime | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| subject | varchar(250) | YES |  | NULL |  |  |
| risk_level | char(1) | YES |  | NULL |  |  |
| relation_program | varchar(50) | YES |  | NULL |  |  |
| risk_detail | longtext | YES |  | NULL |  |  |
| report_user | varchar(25) | YES |  | NULL |  |  |
| review_status | char(1) | YES |  | NULL |  |  |
| review_date_time | datetime | YES |  | NULL |  |  |
| review_staff | varchar(25) | YES |  | NULL |  |  |
| review_detail | longtext | YES |  | NULL |  |  |
| edit_basic | longtext | YES |  | NULL |  |  |
| info_system | longtext | YES |  | NULL |  |  |
| respond_level_depart | longtext | YES |  | NULL |  |  |
| result_follow | longtext | YES |  | NULL |  |  |
| all_date_review | longtext | YES |  | NULL |  |  |
| freq | int(11) | YES |  | NULL |  |  |
| type | int(11) | YES |  | NULL |  |  |
| type_list | int(11) | YES |  | NULL |  |  |
| idc | int(11) | YES |  | NULL |  |  |
| idm | int(11) | YES |  | NULL |  |  |
| form_rm | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
