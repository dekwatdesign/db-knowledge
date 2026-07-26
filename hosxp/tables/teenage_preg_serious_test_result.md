# `teenage_preg_serious_test_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_serious_test_result_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_serious_test_question_id | int(11) | YES | MUL | NULL |  |  |
| teenage_preg_serious_test_answer_id | int(11) | YES | MUL | NULL |  |  |
| teenage_preg_serious_test_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refteenage_preg_serious_test693 | teenage_preg_serious_test_id | no | 1 |
| ix_Refteenage_preg_serious_test_answer653 | teenage_preg_serious_test_answer_id | no | 1 |
| ix_Refteenage_preg_serious_test_question643 | teenage_preg_serious_test_question_id | no | 1 |
| PRIMARY | teenage_preg_serious_test_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
