# `diagai_chatgpt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diagai_chatgpt_id | int(11) | NO | PRI | 0 |  |  |
| diagai_chatgpt_prompt | longtext | YES |  | NULL |  |  |
| diagai_chatgpt_completion | longtext | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| diagai_chatgpt_prompt_tokens | int(11) | YES |  | NULL |  |  |
| diagai_chatgpt_complet_tokens | int(11) | YES |  | NULL |  |  |
| diagai_chatgpt_total_tokens | int(11) | YES |  | NULL |  |  |
| diagai_chatgpt_vn | varchar(20) | YES |  | NULL |  |  |
| diagai_chatgpt_staff | varchar(255) | YES |  | NULL |  |  |
| diagai_chatgpt_model | varchar(255) | YES |  | NULL |  |  |
| diagai_chatgpt_apikey | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | diagai_chatgpt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
