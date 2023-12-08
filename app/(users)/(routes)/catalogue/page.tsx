"use client";
import React, { useState, useEffect } from "react";
import { getAllResources } from "@/lib/api-functions";
import { ResourceProps } from "@/lib/types";
import { Resource } from "../../_components/resource";

const Page = () => {
	const [resources, setResources] = useState<ResourceProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getAllResources();
				setResources(data);
			} catch (error) {
				console.error("Erreur lors de la récupération des ressources:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);
	console.log(resources);
	if (isLoading) {
		return <div>Chargement...</div>;
	}

	return (
		<div>
			{resources.map((resource) => (
				<div
					key={resource.id}
					className="flex gap-4"
				>
					<Resource resource={resource} />
				</div>
			))}
		</div>
	);
};

export default Page;
