# `icd10_topic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icd10_topic_id | int(11) | NO | PRI | 0 |  |  |
| icd10_chapter_id | int(11) | YES |  | NULL |  |  |
| icd10_topic_name_eng | varchar(250) | YES |  | NULL |  |  |
| icd10_topic_name_thai | varchar(250) | YES |  | NULL |  |  |
| icd10_begin | varchar(10) | YES |  | NULL |  |  |
| icd10_end | varchar(10) | YES |  | NULL |  |  |
| icd10_include_text | text | YES |  | NULL |  |  |
| icd10_exclude_text | text | YES |  | NULL |  |  |
| icd10_note_text | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | icd10_topic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
