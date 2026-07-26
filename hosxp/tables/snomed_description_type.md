# `snomed_description_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| description_type_id | varchar(25) | YES | UNI | NULL |  |  |
| description_type_term | varchar(250) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_description_type_id | description_type_id | yes | 1 |
| ix_description_type_term | description_type_term | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "description_type_id": "116680003",
    "description_type_term": "Is a (attribute)"
  },
  {
    "description_type_id": "246075003",
    "description_type_term": "Causative agent (attribute)"
  },
  {
    "description_type_id": "370135005",
    "description_type_term": "Pathological process (attribute)"
  },
  {
    "description_type_id": "116676008",
    "description_type_term": "Associated morphology (attribute)"
  },
  {
    "description_type_id": "42752001",
    "description_type_term": "Due to (attribute)"
  },
  {
    "description_type_id": "363698007",
    "description_type_term": "Finding site (attribute)"
  },
  {
    "description_type_id": "246454002",
    "description_type_term": "Occurrence (attribute)"
  },
  {
    "description_type_id": "363713009",
    "description_type_term": "Has interpretation (attribute)"
  }
]
```
