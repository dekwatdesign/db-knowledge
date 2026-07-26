# `snomed_attribute`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| concept_id | varchar(25) | NO | PRI |  |  |  |
| concept_term | varchar(250) | YES | MUL | NULL |  |  |
| effective_date | date | YES |  | NULL |  |  |
| is_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_attribute_concept_term | concept_term | no | 1 |
| PRIMARY | concept_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "concept_id": "1003703000",
    "concept_term": "Process extends to (attribute)",
    "effective_date": "2022-01-09",
    "is_active": "Y"
  },
  {
    "concept_id": "1003735000",
    "concept_term": "Process acts on (attribute)",
    "effective_date": "2022-01-09",
    "is_active": "Y"
  },
  {
    "concept_id": "103366001",
    "concept_term": "With color (attribute)",
    "effective_date": "2022-01-09",
    "is_active": "Y"
  },
  {
    "concept_id": "103367005",
    "concept_term": "With consistency (attribute)",
    "effective_date": "2022-01-09",
    "is_active": "Y"
  },
  {
    "concept_id": "103368000",
    "concept_term": "With distance (attribute)",
    "effective_date": "2022-01-09",
    "is_active": "Y"
  },
  {
    "concept_id": "103369008",
    "concept_term": "With distribution (attribute)",
    "effective_date": "2022-01-09",
    "is_active": "Y"
  },
  {
    "concept_id": "103370009",
    "concept_term": "With intensity (attribute)",
    "effective_date": "2022-01-09",
    "is_active": "Y"
  },
  {
    "concept_id": "103371008",
    "concept_term": "With odor (attribute)",
    "effective_date": "2022-01-09",
    "is_active": "Y"
  }
]
```
