# `opdscreen_ros`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_ros_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| ros_constitutional | char(1) | YES |  | NULL |  |  |
| ros_constitutional_text | text | YES |  | NULL |  |  |
| ros_eyes | char(1) | YES |  | NULL |  |  |
| ros_eyes_text | text | YES |  | NULL |  |  |
| ros_ent | char(1) | YES |  | NULL |  |  |
| ros_ent_text | text | YES |  | NULL |  |  |
| ros_cardiovascular | char(1) | YES |  | NULL |  |  |
| ros_cardiovascular_text | text | YES |  | NULL |  |  |
| ros_respiratory | char(1) | YES |  | NULL |  |  |
| ros_respiratory_text | text | YES |  | NULL |  |  |
| ros_gastrointestinal | char(1) | YES |  | NULL |  |  |
| ros_gastrointestinal_text | text | YES |  | NULL |  |  |
| ros_hemato | char(1) | YES |  | NULL |  |  |
| ros_hemato_text | text | YES |  | NULL |  |  |
| ros_musculoskeletal | char(1) | YES |  | NULL |  |  |
| ros_musculoskeletal_text | text | YES |  | NULL |  |  |
| ros_skin | char(1) | YES |  | NULL |  |  |
| ros_skin_text | text | YES |  | NULL |  |  |
| ros_neuro | char(1) | YES |  | NULL |  |  |
| ros_neuro_text | text | YES |  | NULL |  |  |
| ros_psychiatric | char(1) | YES |  | NULL |  |  |
| ros_psychiatric_text | text | YES |  | NULL |  |  |
| ros_endocrine | char(1) | YES |  | NULL |  |  |
| ros_endocrine_text | text | YES |  | NULL |  |  |
| ros_genitourinary | char(1) | YES |  | NULL |  |  |
| ros_genitourinary_text | text | YES |  | NULL |  |  |
| ros_allergy | char(1) | YES |  | NULL |  |  |
| ros_allergy_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | opdscreen_ros_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
