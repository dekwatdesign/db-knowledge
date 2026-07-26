# `psych_refer_issue_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_refer_issue_detail_id | int(11) | NO | PRI | 0 |  |  |
| psych_refer_st_id | int(11) | YES | MUL | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| psych_issue_refer_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_issue_refer_type_id | psych_issue_refer_type_id | no | 1 |
| ix_psych_refer_st_id | psych_refer_st_id | no | 1 |
| PRIMARY | psych_refer_issue_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
