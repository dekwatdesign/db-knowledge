# `emp_wf_edu_child`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_wf_edu_child_id | int(11) | NO | PRI | 0 |  |  |
| emp_wf_year | varchar(4) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_mate_id | int(11) | YES |  | NULL |  |  |
| emp_wf_edu_relation | varchar(10) | YES |  | NULL |  |  |
| emp_wf_edu_child_fee | char(1) | YES |  | NULL |  |  |
| emp_wf_edu_child_total | double(22,3) | YES |  | NULL |  |  |
| emp_wf_edu_child_date | date | YES |  | NULL |  |  |
| emp_wf_edu_child_time | time | YES |  | NULL |  |  |
| emp_wf_status_id | int(11) | YES |  | NULL |  |  |
| emp_wf_edu_child_update | datetime | YES |  | NULL |  |  |
| emp_wf_edu_child_staff | varchar(20) | YES |  | NULL |  |  |
| emp_wf_edu_child_fee_study | char(1) | YES |  | NULL |  |  |
| emp_relation_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_wf_edu_child_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
