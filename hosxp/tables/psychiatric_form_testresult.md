# `psychiatric_form_testresult`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_testresult_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_form_testresult_date | datetime | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_form_testresult_problem | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_testresult_sent_check | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_testresult_tool_test | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_testresult_tool_test_date | datetime | YES |  | NULL |  |  |
| psychiatric_form_testresult_testing | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_testresult_result_check | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_testresult_result_test_psychiatric | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_testresult_comment | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_testresult_doctor | varchar(6) | YES |  | NULL |  |  |
| psychiatric_form_testresult_user_psychiatric | varchar(6) | YES |  | NULL |  |  |
| psychiatric_form_testresult_send_doctor | varchar(6) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_testresult_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
