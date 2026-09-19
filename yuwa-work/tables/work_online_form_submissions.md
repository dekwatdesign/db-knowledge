# `work_online_form_submissions`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| form_id | int | NO | MUL | NULL |  |  |
| group_id | int | YES | MUL | NULL |  |  |
| share_id | int | YES | MUL | NULL |  |  |
| submission_data | longtext | NO |  | NULL |  |  |
| submitter_user_id | int | YES |  | NULL |  |  |
| submitter_name | varchar(255) | YES |  | NULL |  |  |
| submitter_email | varchar(255) | YES |  | NULL |  |  |
| submitter_ip | varchar(255) | YES |  | NULL |  |  |
| public_download_token | varchar(64) | YES | UNI | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| fk_online_form_submissions_group | group_id | no | 1 |
| idx_online_form_submissions_form | form_id | no | 1 |
| idx_online_form_submissions_share | share_id | no | 1 |
| PRIMARY | id | yes | 1 |
| uniq_online_form_submission_public_token | public_download_token | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| form_id | `work_online_forms.id` | fk_online_form_submissions_form |
| group_id | `work_online_form_groups.id` | fk_online_form_submissions_group |
| share_id | `work_online_form_shares.id` | fk_online_form_submissions_share |

## Sample rows (0)

```json
[]
```
