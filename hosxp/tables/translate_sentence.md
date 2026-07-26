# `translate_sentence`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| translate_sentence_id | int(11) | NO | PRI | 0 |  |  |
| thai_sentence | varchar(250) | YES | MUL | NULL |  |  |
| thai_sentence_md5 | varchar(50) | YES | MUL | NULL |  |  |
| language | char(2) | YES | MUL | NULL |  |  |
| translate_base64 | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_md5 | thai_sentence_md5 | no | 1 |
| ix_thai | thai_sentence | no | 1 |
| ix_thai_lang_uni | thai_sentence | yes | 1 |
| ix_thai_lang_uni | language | yes | 2 |
| ix_thai_lang_uni_index | language | yes | 1 |
| ix_thai_lang_uni_index | thai_sentence | yes | 2 |
| PRIMARY | translate_sentence_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
