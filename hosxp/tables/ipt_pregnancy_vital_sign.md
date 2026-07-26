# `ipt_pregnancy_vital_sign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| bps | double(15,3) | YES |  | NULL |  |  |
| bpd | double(15,3) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| hr | int(11) | YES |  | NULL |  |  |
| pe_lung | varchar(200) | YES |  | NULL |  |  |
| pe_heart | varchar(200) | YES |  | NULL |  |  |
| pe_abdomen | varchar(200) | YES |  | NULL |  |  |
| fetal_heart_sound | varchar(200) | YES |  | NULL |  |  |
| cervical_open_size | double(15,3) | YES |  | NULL |  |  |
| eff | double(15,3) | YES |  | NULL |  |  |
| station | varchar(10) | YES |  | NULL |  |  |
| labour_amniotic_type_id | int(11) | YES |  | NULL |  |  |
| labour_sac_type_id | int(11) | YES |  | NULL |  |  |
| hct | double(15,3) | YES |  | NULL |  |  |
| ultrasound_result | text | YES |  | NULL |  |  |
| pregnancy_position_id | int(11) | YES |  | NULL |  |  |
| pregnancy_nst_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "520000558",
    "bw": 71.0,
    "temperature": 37.0,
    "height": null,
    "bps": 100.0,
    "bpd": 60.0,
    "rr": 20,
    "hr": 84,
    "pe_lung": "Clear",
    "pe_heart": "Normal",
    "pe_abdomen": "Normal",
    "fetal_heart_sound": "124",
    "cervical_open_size": 10.0,
    "eff": 100.0,
    "station": "+2",
    "labour_amniotic_type_id": 2,
    "labour_sac_type_id": 3,
    "hct": 31.0,
    "ultrasound_result": null,
    "pregnancy_position_id": 2,
    "pregnancy_nst_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "520000567",
    "bw": 56.0,
    "temperature": 37.0,
    "height": null,
    "bps": 110.0,
    "bpd": 60.0,
    "rr": 40,
    "hr": 126,
    "pe_lung": "Clear",
    "pe_heart": "Normal",
    "pe_abdomen": "Normal",
    "fetal_heart_sound": "142",
    "cervical_open_size": 2.0,
    "eff": 70.0,
    "station": "-2",
    "labour_amniotic_type_id": null,
    "labour_sac_type_id": 1,
    "hct": 34.0,
    "ultrasound_result": null,
    "pregnancy_position_id": 2,
    "pregnancy_nst_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "520004657",
    "bw": null,
    "temperature": null,
    "height": null,
    "bps": null,
    "bpd": null,
    "rr": null,
    "hr": null,
    "pe_lung": "Clear",
    "pe_heart": "Normal",
    "pe_abdomen": "Normal",
    "fetal_heart_sound": null,
    "cervical_open_size": null,
    "eff": null,
    "station": null,
    "labour_amniotic_type_id": null,
    "labour_sac_type_id": null,
    "hct": null,
    "ultrasound_result": null,
    "pregnancy_position_id": null,
    "pregnancy_nst_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "520004672",
    "bw": 53.0,
    "temperature": 36.5,
    "height": 154.0,
    "bps": 110.0,
    "bpd": 60.0,
    "rr": 20,
    "hr": 92,
    "pe_lung": "Clear",
    "pe_heart": "Normal",
    "pe_abdomen": "Normal",
    "fetal_heart_sound": "148",
    "cervical_open_size": 7.0,
    "eff": 90.0,
    "station": "0",
    "labour_amniotic_type_id": null,
    "labour_sac_type_id": 1,
    "hct": null,
    "ultrasound_result": null,
    "pregnancy_position_id": 1,
    "pregnancy_nst_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "520004673",
    "bw": 56.0,
    "temperature": null,
    "height": 148.0,
    "bps": 120.0,
    "bpd": 80.0,
    "rr": 20,
    "hr": 84,
    "pe_lung": "Clear",
    "pe_heart": "Normal",
    "pe_abdomen": "Normal",
    "fetal_heart_sound": "130",
    "cervical_open_size": 2.0,
    "eff": 80.0,
    "station": "-1",
    "labour_amniotic_type_id": null,
    "labour_sac_type_id": 1,
    "hct": null,
    "ultrasound_result": null,
    "pregnancy_position_id": 2,
    "pregnancy_nst_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "520004674",
    "bw": 64.0,
    "temperature": 0.0,
    "height": 0.0,
    "bps": 110.0,
    "bpd": 70.0,
    "rr": 20,
    "hr": null,
    "pe_lung": "Clear",
    "pe_heart": "Normal",
    "pe_abdomen": "Normal",
    "fetal_heart_sound": null,
    "cervical_open_size": null,
    "eff": null,
    "station": null,
    "labour_amniotic_type_id": null,
    "labour_sac_type_id": null,
    "hct": null,
    "ultrasound_result": null,
    "pregnancy_position_id": null,
    "pregnancy_nst_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "520004677",
    "bw": 74.2,
    "temperature": 37.0,
    "height": 0.0,
    "bps": 110.0,
    "bpd": 70.0,
    "rr": 20,
    "hr": null,
    "pe_lung": "Clear",
    "pe_heart": "Normal",
    "pe_abdomen": "Normal",
    "fetal_heart_sound": null,
    "cervical_open_size": null,
    "eff": null,
    "station": null,
    "labour_amniotic_type_id": null,
    "labour_sac_type_id": null,
    "hct": null,
    "ultrasound_result": null,
    "pregnancy_position_id": null,
    "pregnancy_nst_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "520004691",
    "bw": 0.0,
    "temperature": 0.0,
    "height": 0.0,
    "bps": 0.0,
    "bpd": 0.0,
    "rr": 0,
    "hr": null,
    "pe_lung": "Clear",
    "pe_heart": "Normal",
    "pe_abdomen": "Normal",
    "fetal_heart_sound": null,
    "cervical_open_size": null,
    "eff": null,
    "station": null,
    "labour_amniotic_type_id": null,
    "labour_sac_type_id": null,
    "hct": null,
    "ultrasound_result": null,
    "pregnancy_position_id": null,
    "pregnancy_nst_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
