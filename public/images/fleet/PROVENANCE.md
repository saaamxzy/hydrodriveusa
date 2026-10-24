# HydroDrive fleet images

Created with the built-in Imagegen tool on 2026-10-23, at the owner's explicit request to apply one unified generated company background to their four vehicle photos. The owner supplied the files in hydro_cars.

The courtyard is a generated photo setting, not a photograph of HydroDrive premises. The vehicles were edited from supplied photographs; generation can change fine details, so these composites should be reviewed against the originals before publication. No year, trim, range, powertrain or price is inferred from the images. All original source files remain untouched.

| Source | Master | Web asset | Render size |
| --- | --- | --- | --- |
| bolt.avif | bolt-master.png | bolt.webp | 1448 × 1086 |
| crv.avif | crv-master.png | crv.webp | 1448 × 1086 |
| cayenne.jpeg | cayenne-master.png | cayenne.webp | 1448 × 1086 |
| gwagon.jpeg | gwagon-master.png | gwagon.webp | 1448 × 1086 |

The AVIF inputs were decoded to PNG for tool compatibility, without visual editing. The Bolt composite established the shared setting; the other three calls referenced both their original vehicle photo and that master. background-master.png is the empty reusable setting, derived by removing the vehicle from the Bolt composite. PNG masters are unmodified tool outputs. WebP files are quality-88 encodings, not crops. The site shows the disclosure “HydroDrive vehicle photos with generated backgrounds.”

## Exact prompts

### fleetMasterPrompt

Use case: compositing. Asset: HydroDrive USA fleet website, first of four photographs with one unified background.
Input image 1 is the edit target: the customer's actual black Chevrolet Bolt. Preserve the actual car's identity exactly: body proportions, black paint, front three-quarter view facing left, badge, headlights, wheels, tires, windows, license plate and every visible fitted part. Do not upgrade, restyle or invent vehicle details.
Replace only the parking lot surroundings with a consistent premium but practical automotive photo setting: pale warm-gray lightly textured concrete ground, simple off-white stucco wall across the back, a recessed deep navy rectangular wall plane on the right and one narrow dark green architectural panel (HydroDrive navy #0a1628 and green #0a6e5c). Small distant California planting at far right, no signage, no logos, no text. Quiet outdoor service courtyard, not a claimed real business location. Soft late-morning daylight from upper left; natural contact shadow; subtle physically plausible new surroundings reflected in car paint and windows. No dramatic studio glow, gradients, mist or neon.
Composition landscape 4:3, entire car fully in frame including tires, no cropping, centered with generous 8–10% margins, camera eye level around headlights. Keep reference vehicle angle. Ground foreground takes lower quarter. Commercial automotive realism. This background will be reused unchanged for the other three customer cars. Output one image only, no collage.

### crvPrompt

Use case: compositing. Asset: HydroDrive USA fleet website. Image 1 is the actual customer's vehicle PHOTO TO EDIT (white Honda CR-V, black wheels and mirrors). Image 2 is the exact shared courtyard BACKGROUND reference, NOT a vehicle reference. Replace the surroundings of Image 1 with the same courtyard as Image 2: same off-white stucco wall, narrow green vertical panel on left, navy plane and landscaping on right, pale concrete ground, identical lighting, viewpoint and horizon. The Bolt in image 2 must NOT appear. Output ONE landscape 4:3 photograph of ONLY the vehicle from image 1, full vehicle in frame, centered at same scale with 8–10% margin. Preserve the customer's actual car identity exactly: shape, paint color, front three-quarter angle facing left, grille, badge, lamps, wheels, tires, mirrors, windows, roof, visible plate and fitted parts. Do not upgrade, repair, restyle or invent any car details. Natural contact shadow, plausible paint reflections matched to the new setting. Commercial automotive realism, soft daylight from upper left. No writing, new logo, watermark or collage. Background is a generated staging scene, not a real business location.

### cayennePrompt

Use case: compositing. Asset: HydroDrive USA fleet website. Image 1 is the actual customer's vehicle PHOTO TO EDIT (light gray Porsche Cayenne, dark multi-spoke wheels and red calipers). Image 2 is the exact shared courtyard BACKGROUND reference, NOT a vehicle reference. Replace the surroundings of Image 1 with the same courtyard as Image 2: same off-white stucco wall, narrow green vertical panel on left, navy plane and landscaping on right, pale concrete ground, identical lighting, viewpoint and horizon. The Bolt in image 2 must NOT appear. Output ONE landscape 4:3 photograph of ONLY the vehicle from image 1, full vehicle in frame, centered at same scale with 8–10% margin. Preserve the customer's actual car identity exactly: shape, paint color, front three-quarter angle facing left, grille, badge, lamps, wheels, tires, mirrors, windows, roof, visible plate and fitted parts. Do not upgrade, repair, restyle or invent any car details. Natural contact shadow, plausible paint reflections matched to the new setting. Commercial automotive realism, soft daylight from upper left. No writing, new logo, watermark or collage. Background is a generated staging scene, not a real business location.

### gwagonPrompt

Use case: compositing. Asset: HydroDrive USA fleet website. Image 1 is the actual customer's vehicle PHOTO TO EDIT (silver Mercedes G-Class, black wheels and roof). Image 2 is the exact shared courtyard BACKGROUND reference, NOT a vehicle reference. Replace the surroundings of Image 1 with the same courtyard as Image 2: same off-white stucco wall, narrow green vertical panel on left, navy plane and landscaping on right, pale concrete ground, identical lighting, viewpoint and horizon. The Bolt in image 2 must NOT appear. Output ONE landscape 4:3 photograph of ONLY the vehicle from image 1, full vehicle in frame, centered at same scale with 8–10% margin. Preserve the customer's actual car identity exactly: shape, paint color, front three-quarter angle facing left, grille, badge, lamps, wheels, tires, mirrors, windows, roof, visible plate and fitted parts. Do not upgrade, repair, restyle or invent any car details. Natural contact shadow, plausible paint reflections matched to the new setting. Commercial automotive realism, soft daylight from upper left. No writing, new logo, watermark or collage. Background is a generated staging scene, not a real business location.

### backgroundPrompt

Use case: precise-object-edit. Create the reusable EMPTY HydroDrive company backdrop from this image. Remove the Chevrolet Bolt entirely and naturally reconstruct the concrete ground and wall behind it. Preserve exactly the courtyard composition, off-white stucco wall, slim green panel at left, navy wall on right, right-edge planting, concrete joints, camera, perspective and daylight. No car, no people, no logos or writing. Landscape 4:3. This is a generated photo-staging environment, not a claimed real business premises.
