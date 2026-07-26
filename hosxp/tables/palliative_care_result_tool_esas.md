# `palliative_care_result_tool_esas`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_result_tool_esas_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_screen_esas_id | int(11) | YES |  | NULL |  |  |
| palliative_care_esas_choice_id | int(11) | YES |  | NULL |  |  |
| palliative_care_esas_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_result_tool_esas_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
